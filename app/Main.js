import React, { Component, PropTypes } from 'react'
import {
  Navigator,
  BackAndroid,
  View,
  StyleSheet,
} from 'react-native'
// import Toast from 'react-native-root-toast'
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import http from './http'
import Toast from './components/Toast'

const store = configureStore({}, {
  fd: http,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class Main extends Component {

  static childContextTypes = {
    store: PropTypes.object.isRequired,
    nav: PropTypes.object,
    toast: PropTypes.object,
  }

  constructor() {
    super()
    this.onBackAndroid = this.onBackAndroid.bind(this)
    this.state = {
      nav: null,
      toast: null,
    }
  }

  getChildContext() {
    return {
      store,
      toast: this.state.toast,
      nav: this.state.nav,
    }
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid)
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      nav: this.nav,
      toast: this.toast,
    })
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid)
  }

  onBackAndroid() {
    const nav = this.state.nav
    if (nav) {
      const curRoutes = nav.getCurrentRoutes()
      const lastRoute = curRoutes[curRoutes.length - 1]

      if (lastRoute.onHardwareBackPress) { // 先执行route注册的事件
        const flag = lastRoute.onHardwareBackPress()
        if (flag === false) { // 返回值为false就终止后续操作
          return true
        }
      }

      if (curRoutes.length === 1) {
        // 在第一页了
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
          // 最近2秒内按过back键，可以退出应用。
          return false
        }
        this.lastBackPressed = Date.now()
        this.toast.show('再按一次退出应用')
        return true
      }
      nav.pop()
      return true
    }
    return false
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator
            ref={nav => {
              this.nav = nav
            }}
            initialRoute={routes.navTabs()}
            configureScene={(route) => {
              console.log(route.name)
              return Navigator.SceneConfigs.FadeAndroid
            }}
            renderScene={(route) => {
              const RouteComponent = route.component
              return (
                <RouteComponent {...route.params} />
              )
            }}
          />
          <Toast
            ref={toast => {
              this.toast = toast
            }}
          />
        </View>
      </Provider>
    )
  }

}

export default Main

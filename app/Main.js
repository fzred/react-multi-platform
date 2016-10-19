import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Home from './common/Home/Home'
import Category from './common/Category'
import NavTabBar from './common/NavTabBar/'
import configureStore from './store/configureStore'
import Rend from '../common/http'
import interceptorsServer from './http/interceptor/server'
import interceptorsErrCatch from './http/interceptor/errCatch'

const rend = new Rend({ fetch, Headers })
interceptorsServer(rend)
interceptorsErrCatch(rend)
const store = configureStore({}, {
  rend,
})

class Main extends Component {

  static childContextTypes = {
    store: PropTypes.object.isRequired,
  }

  getChildContext() { // eslint-disable-line class-methods-use-this
    return {
      store,
    }
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Provider store={store}>
        <ScrollableTabView renderTabBar={() => <NavTabBar />} tabBarPosition="bottom">
          <Home tabLabel="Home" />
          <Category tabLabel="Category" />
        </ScrollableTabView>
      </Provider>
    )
  }

}

//    return (
//      <Navigator
//        initialRoute={{ name: 'Home', component: Home }}
//        configureScene={(route) => {
//          return Navigator.SceneConfigs.VerticalDownSwipeJump
//        }}
//        renderScene={(route, navigator) => {
//          let Component = route.component;
//          return <Component {...route.params} navigator={navigator}/>
//        }}/>
//    )

export default Main

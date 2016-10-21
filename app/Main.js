import React, { Component, PropTypes } from 'react'
import {
  Navigator,
} from 'react-native'
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import http from './http'

const store = configureStore({}, {
  fd: http,
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
        <Navigator
          initialRoute={routes.navTabs()}
          configureScene={(route) => {
            console.log(route)
            return Navigator.SceneConfigs.VerticalDownSwipeJump
          }}
          renderScene={(route, navigator) => {
            const RouteComponent = route.component
            return <RouteComponent {...route.params} navigator={navigator} />
          }}
        />
      </Provider>
    )

    // return (
    //   <Provider store={store}>
    //     <ScrollableTabView renderTabBar={() => <NavTabBar />} tabBarPosition="bottom">
    //       <Home tabLabel="Home" />
    //       <Category tabLabel="Category" />
    //     </ScrollableTabView>
    //   </Provider>
    // )
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

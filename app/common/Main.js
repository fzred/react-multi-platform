import React, { Component } from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native'
import Home from './Home/Home'
import Category from './Category'
import NavTabBar from './NavTabBar/'

export default class extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <ScrollableTabView renderTabBar={() => <NavTabBar/>} tabBarPosition="bottom">
        <Home tabLabel="Home"></Home>
        <Category tabLabel="Category"></Category>
      </ScrollableTabView>
    )
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

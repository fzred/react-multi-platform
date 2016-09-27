import React from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Home from './Home/Home'
import Category from './Category'
import NavTabBar from './NavTabBar/'

export default function Main() {
  return (
    <ScrollableTabView renderTabBar={() => <NavTabBar />} tabBarPosition="bottom">
      <Home tabLabel="Home" />
      <Category tabLabel="Category" />
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

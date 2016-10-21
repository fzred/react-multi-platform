import React from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Home from './Home'
import Category from './Category'
import NavTabBar from './NavTabBar/'

function NavTabs() {
  return (
    <ScrollableTabView
      renderTabBar={() => <NavTabBar />}
      tabBarPosition="bottom"
    >
      <Home tabLabel="Home" />
      <Category tabLabel="Category" />
    </ScrollableTabView>
  )
}

export default NavTabs

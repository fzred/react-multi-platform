import React from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Home from './Home'
import Category from './Category'
import NavTabBar from './NavTabBar/'

function NavTabs(props) {
  return (
    <ScrollableTabView
      renderTabBar={() => <NavTabBar />}
      tabBarPosition="bottom"
    >
      <Home tabLabel="Home" {...props} />
      <Category tabLabel="Category" {...props} />
    </ScrollableTabView>
  )
}

export default NavTabs

import React from 'react'
import Home from './Home'

export default {

  path: '/',

  name: 'home',

  async action() {
    return {
      title: '首页',
      component: <Home />,
    }
  },

}

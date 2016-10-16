import React from 'react'
import Login from './Login'

export default {

  path: '/login',

  async action({ store, redirect }) {
    return {
      title: '登录',
      component: <Login />,
    }
  },

}

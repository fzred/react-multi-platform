import React from 'react'
import Login from './Login'

export default {

  path: '/login',

  name: 'login',

  action() {
    return {
      component: <Login />,
    }
  },

}

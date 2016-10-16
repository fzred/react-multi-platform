import React from 'react'
import Search from './Search'
import dispatchOnce from '../../store/dispatchOnce'

export default {

  path: '/search',

  store: null,

  async action() {
    return {
      title: '搜索',
      component: <Search />,
    }
  },

}

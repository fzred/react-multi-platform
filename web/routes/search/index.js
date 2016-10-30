import React from 'react'
import Search from './Search'
import dispatchOnce from '../../store/dispatchOnce'

export default {

  path: '/search/:word',

  name: 'search',

  async action(context, { word }) {
    console.log(word)
    return {
      title: '搜索',
      component: <Search />,
    }
  },

}

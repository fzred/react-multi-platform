import React from 'react'
import Result from './Result'

export default {

  path: '/result',

  name: 'searchResult',

  action({ store, query }) {
    store.getState()
    return {
      title: '搜索结果',
      component: <Result query={query} />,
    }
  },

}

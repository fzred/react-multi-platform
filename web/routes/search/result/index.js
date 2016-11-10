import React from 'react'
import Result from './Result'

export default {

  path: '/result',

  name: 'searchResult',

  action({ query }) {
    return {
      title: '搜索结果',
      component: <Result query={query} />,
    }
  },

}

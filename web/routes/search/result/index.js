import React from 'react'
// import Result from './Result'

export default {

  path: '/result',

  name: 'searchResult',

  action({ query }) {
    console.log(query)
    return {
      title: '搜索结果',
      component: <div>result</div>,
    }
  },

}

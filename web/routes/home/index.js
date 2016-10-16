import React from 'react'
import Home from './Home'
import dispatchOnce from '../../store/dispatchOnce'
import { fetchHomeHeadPageData } from '../../../common/actions'

export default {

  path: '/',

  store: null,

  async action() {
//    const resp = await fetch('/graphql', {
//      method: 'post',
//      headers: {
//        Accept: 'application/json',
//        'Content-Type': 'application/json',
//      },
//      body: JSON.stringify({
//        query: '{news{title,link,contentSnippet}}',
//      }),
//      credentials: 'include',
//    })
//    const { data } = await resp.json()
//    if (!data || !data.news) throw new Error('Failed to load the news feed.')
//    const r = await new Promise(resolve => {
//      setTimeout(() => {
//        resolve(111)
//      }, 0)
//    })
//    console.log('r', r)

    await dispatchOnce({
      store: this.store,
      action: fetchHomeHeadPageData(),
      key: 'home',
      time: 1000 * 3600,
    })

    return {
      title: 'React Starter Kit',
      component: <Home />,
    }
  },

}

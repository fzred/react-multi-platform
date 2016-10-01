/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import Home from './Home'
import fetch from '../../core/fetch'
import { fetchTest } from '../../../common/actions'

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

    if (this.store) {
      console.log('this.store.dispatch 1')
      await this.store.dispatch(fetchTest())
      console.log('this.store.dispatch 2')
    }
    return {
      title: 'React Starter Kit',
      component: <Home />,
    }
  },

}

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

export default {

  path: '/',

  async action() {
    const r = await new Promise(resolve => {
      setTimeout(() => {
        resolve(111)
      }, 50)
    })
    console.log('r', r)
    return {
      title: 'React Starter Kit',
      component: <Home />,
    }
  },

}

import React from 'react'
import Search from './Search'
import dispatchOnce from '../../store/dispatchOnce'
import { getCategory1Level } from '../../../common/actions/category'

export default {

  path: '/search',

  name: 'search',

  async action({ store }) {
    await dispatchOnce({
      store,
      action: getCategory1Level(),
      key: 'category',
      time: 1000 * 3600,
    })
    return {
      title: '搜索',
      component: <Search />,
    }
  },

}

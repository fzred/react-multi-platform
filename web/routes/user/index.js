import React from 'react'
import User from './User'
import dispatchOnce from '../../store/dispatchOnce'

/* eslint-disable global-require */
export default {

  path: '/user',

  isAuth: 1,

  children: [
    require('./order').default,
    {
      path: '/',
      async action({ store, redirect }) {
        return {
          title: '我的',
          component: <User />,
        }
      },
    },
  ],
}

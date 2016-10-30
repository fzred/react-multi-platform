import { getUsersInfo } from '../../common/actions/user'

/* eslint-disable global-require */

export default {

  path: '/',

  children: [
    require('./home').default,
    require('./login').default,
  ],

  async action({ next }) {
    let route

    do {
      route = await next()
    } while (!route)

    return route
  },

}

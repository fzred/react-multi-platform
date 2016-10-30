import { getUsersInfo } from '../../common/actions/user'

/* eslint-disable global-require */

export default {

  path: '/',

  children: [
    require('./home').default,
    require('./login').default,
  ],

  /*
   全局钩子 action触发时前
   */
  // async beforeEach({ route, store, redirect, path }) {
  //   if (route === this) {
  //     return
  //   }
  //   if (route.isAuth) {
  //     let usersInfo = store.getState().usersInfo
  //     if (!usersInfo) {
  //       usersInfo = await store.dispatch(getUsersInfo())
  //     }
  //     if (!usersInfo) {
  //       redirect(`/login?sourceurl=${encodeURIComponent(path)}`)
  //     }
  //   }
  // },

  async action({ next }) {
    let route

    do {
      route = await next()
    } while (!route)

    return route
  },

}

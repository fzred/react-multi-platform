/* eslint-disable global-require */
export default {

  path: '/order',

  children: [
    require('./detail').default,
    // require('./list'),
  ],
}

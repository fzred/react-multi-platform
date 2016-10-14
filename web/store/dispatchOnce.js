// 一般用于防止服务端已经请求数据 ，浏览器重复请求
export default function ({ store, action, key, time = 2000 }) {
  const state = store.getState()[key]
  if (state.fetchDate && state.fetchDate + time > Date.now()) {
    return new Promise(resolve => resolve())
  }
  return store.dispatch(action)
}

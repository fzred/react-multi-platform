/*
 注册服务端 rend 拦截器
 */
export default function (rend, { req }) {
  rend.interceptors.request.push(requestConfig => {
    const request = Object.assign({}, requestConfig)
    if (req && req.headers) {
      request.headers.set('cookie', req.headers.cookie)
    }
    return request
  })
}

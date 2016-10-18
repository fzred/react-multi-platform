/*
 注册服务端 rend 拦截器
 */
import { host } from '../../config'

function localUrl(url) {
  if (url.startsWith('//')) {
    return `https:${url}`
  }

  if (url.startsWith('http')) {
    return url
  }

  return `http://${host}${url}`
}
export default function (rend, { req }) {
  // 修改url
  rend.interceptors.request.push(requestConfig => {
    const request = Object.assign({}, requestConfig)
    request.url = localUrl(request.url)
    return request
  })

  // 设置cookie
  rend.interceptors.request.push(requestConfig => {
    const request = Object.assign({}, requestConfig)
    if (req && req.headers) {
      request.headers.set('cookie', req.headers.cookie)
    }
    return request
  })
}

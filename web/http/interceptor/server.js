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
  // 设置cookie  修改url
  rend.interceptors.request.push(requestConfig => {
    const request = Object.assign({}, requestConfig)
    const isLocalUrl = /^\/($|[^\/])/.test(request.url)
    if (isLocalUrl && request.credentials === 'include' && req && req.headers) {
      request.headers.set('cookie', req.headers.cookie || '')
    }

    request.url = localUrl(request.url)
    return request
  })
}

/*
 注册服务端 rend 拦截器
 */
import { proxyUrl } from '../../../common/config'

function localUrl(url) {
  if (url.startsWith('//')) {
    return `https:${url}`
  }

  if (url.startsWith('http')) {
    return url
  }

  return `${proxyUrl}${url}`
}
export default function (rend) {
  //  修改url
  rend.interceptors.request.push(requestConfig => {
    const request = Object.assign({}, requestConfig)
    request.headers.set('A-CID', 'MORNING-STAR')
    request.url = localUrl(request.url)
    return request
  })
}

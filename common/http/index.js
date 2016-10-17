/*
 基于 fetch
 */
import method from './interceptors/method'
import send from './interceptors/send'
import { when } from './util'

export default class Http {
  constructor() {
    this.interceptors = {
      request: [],
      response: [],
    }
  }


  create(requestConfig) {
    const promise = when(requestConfig)
    // 注册请求前拦截器
    for (const value of this.interceptors.request) {
      when(promise, value)
    }

    when(promise, method)
    when(promise, send)

    // 注册请求后拦截器
    for (const value of this.interceptors.response) {
      when(promise, value)
    }

    return promise
  }

  get(url, data, option) {
    return this.create({
      method: 'GET',
      url,
      data,
      option,
    })
  }

  post(url, data, option) {
    return this.create({
      method: 'POST',
      url,
      data,
      option,
    })
  }

}

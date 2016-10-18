/*
 基于 fetch
 */
import method from './interceptors/method'
import send from './interceptors/send'
import before from './interceptors/before'
import after from './interceptors/after'
import { when } from './util'

export default class Rend {
  constructor() {
    this.interceptors = {
      request: [],
      response: [],
      responseErr: [],
    }
  }


  create(requestConfig) {
    let promise = when(requestConfig)
    promise = when(promise, before)

    // 注册请求前拦截器
    for (const value of this.interceptors.request) {
      promise = when(promise, value)
    }

    promise = when(promise, method)
    promise = when(promise, send)

    // 注册请求后拦截器
    for (const value of this.interceptors.response) {
      promise = when(promise, value)
    }

    for (const value of this.interceptors.responseErr) {
      promise = when(promise, null, value)
    }

    promise = when(promise, after)

    return promise
  }

  get(url, data, options) {
    return this.create({
      method: 'GET',
      url,
      data,
      options,
    })
  }

  post(url, data, options) {
    return this.create({
      method: 'POST',
      url,
      data,
      options,
    })
  }

}

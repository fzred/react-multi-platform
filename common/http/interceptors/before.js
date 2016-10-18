import { merge } from '../util'

export default function (requestConfig) {
  // eslint-disable-next-line
  requestConfig.options = requestConfig.options || {}
  const request = merge({
    method: 'GET',
    credentials: 'include',
    header: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    options: {
      emulateHTTP: false,
      emulateJSON: false,
    },
    data: {},
  }, requestConfig)
  request.header = new Headers(request.header)

  return request
}

export default function (requestConfig) {
  const request = Object.assign({}, requestConfig)
  const { options } = request
  if (options.client) {
    // 自定义http请求handle
    return options.client(request)
  }

  delete request.data
  delete request.options
  return fetch(request)
}

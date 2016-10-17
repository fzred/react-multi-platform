export default function (requestConfig) {
  const request = Object.assign({}, requestConfig)
  const { options } = request

  delete request.data
  delete request.options
  return fetch(request)
}

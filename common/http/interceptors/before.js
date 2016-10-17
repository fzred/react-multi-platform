export default function (requestConfig) {
  const request = Object.assign({
    method: 'GET',
    credentials: 'include',
    header: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    option: {
      emulateHTTP: false,
      emulateJSON: false,
    },
    data: {},
  }, requestConfig)
  request.header = new Headers(request.header)

  return fetch(request)
}

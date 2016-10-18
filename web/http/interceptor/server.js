export default function (rend, { req }) {
  if (req) {
    rend.interceptors.request.push(requestConfig => {
      const request = Object.assign({}, requestConfig)
      request.headers.set('cookie', req.headers.cookie)
      return request
    })
  }
}

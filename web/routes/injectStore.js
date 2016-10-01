export default function injectStore(routes, store) {
  if (Array.isArray(routes)) {
    routes.forEach(item => injectStore(item, store))
  } else {
    if ('store' in routes) {
      routes.store = store // eslint-disable-line
    }
    if (Array.isArray(routes.children)) {
      injectStore(routes.children, store)
    }
  }
}

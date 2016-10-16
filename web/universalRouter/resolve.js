import matchRoute from './matchRoute'

async function resolve(routes, pathOrContext) {
  const context = typeof pathOrContext === 'string' || pathOrContext instanceof String
    ? { path: pathOrContext }
    : pathOrContext
  const root = Array.isArray(routes) ? { path: '/', children: routes } : routes
  let result = null
  let value
  let done = false

  const match = matchRoute(root, '', context.path)

  async function next() {
    ({ value, done } = match.next())

    if (!value || done || (result !== null && result !== undefined)) {
      return result
    }

    const newContext = Object.assign({}, context, value)
    if (root.beforeEach) {
      await root.beforeEach({
        route: value.route,
        context: newContext,
        params: newContext.params,
      })
    }
    if (value.route.action) {
      result = await value.route.action(newContext, newContext.params)
    }

    return await next()
  }

  context.next = next

  return await next()
}

export default resolve

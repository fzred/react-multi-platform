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

    if (value.route.action) {
      const newContext = Object.assign({}, context, value)
      result = await value.route.action(newContext, newContext.params)
    }

    return await next()
  }

  context.next = next

  return await next()
}

export default resolve

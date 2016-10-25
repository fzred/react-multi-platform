import { matchPath, matchBasePath } from './matchPath'

function* matchRoute(route, baseUrl, path) {
  let match

  if (!route.children) {
    match = matchPath(route.path, path)

    if (match) {
      yield {
        route,
        baseUrl,
        path: match.path,
        keys: match.keys,
        params: match.params,
      }
    }
  }

  if (route.children) {
    match = matchBasePath(route.path, path)
    if (match) {
      yield {
        route,
        baseUrl,
        path: match.path,
        keys: match.keys,
        params: match.params,
      }

      for (const childRoute of route.children) {
        const newPath = path.substr(match.path.length)
        yield* matchRoute(
          childRoute,
          baseUrl + (match.path === '/' ? '' : match.path),
          newPath.startsWith('/') ? newPath : `/${newPath}`
        )
      }
    }
  }
}

export default matchRoute

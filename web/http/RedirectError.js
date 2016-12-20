/*
 * @flow
 */

class RedirectError extends Error {
  status: number
  path: string
}

export default RedirectError

import { USERS_INFO_SET, USERS_INFO_CLEAR } from '../types'

export function getUsersInfo() {
  return (dispatch, getState, { fd }) => (
    fd.get('/b2c-user/api/users/getUsersInfo')
      .then(({ data, code }) => {
        if (code === 1000) {
          dispatch({
            type: USERS_INFO_SET,
            data,
          })
        }
        return data
      })
  )
}

export function login(params) {
  return (dispatch, getState, { fd }) => (
    fd.get('/b2c-user/api/users/login', params)
  )
}

export function logout() {
  return {
    type: USERS_INFO_CLEAR,
  }
}

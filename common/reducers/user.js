import { USERS_INFO_SET, USERS_INFO_CLEAR } from '../types'

export function usersInfo(state = null, action) {
  switch (action.type) {
    case USERS_INFO_SET:
      return action.data
    case USERS_INFO_CLEAR:
      return null
    default:
      return state
  }
}

export function getUsersList() {
}

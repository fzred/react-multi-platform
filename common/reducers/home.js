import { HOME_MODULE_SET } from '../types'

export default function home(state = { list: [] }, action) {
  switch (action.type) {
    case HOME_MODULE_SET:
      return action.data
    default:
      return state
  }
}

import {
  LOADING_NEW,
  LOADING_COMPLETE,
} from '../types'

export default function loadingCount(state = 0, action) {
  switch (action.type) {
    case LOADING_NEW:
      return state + 1
    case LOADING_COMPLETE:
      return state - 1
    default:
      return state
  }
}

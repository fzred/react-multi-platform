import {
  ACTIVITY_PRODUCT_LIST_SET,
  ACTIVITY_PRODUCT_LIST_CONCAT,
} from '../types'

export default function home(state = {}, action) {
  switch (action.type) {
    case ACTIVITY_PRODUCT_LIST_SET:
      return { ...state, [action.activityId]: action.data }
    case ACTIVITY_PRODUCT_LIST_CONCAT: {
      const newState = { ...state }
      if (newState[action.activityId]) {
        // 已存在，拼接在后面，瀑布式
        const oldData = newState[action.activityId]
        // eslint-disable-next-line no-param-reassign
        action.data.list = [...action.data.list, ...oldData.list]
      }
      newState[action.activityId] = action.data
      return newState
    }
    default:
      return state
  }
}

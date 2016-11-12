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
      let newList = action.data.list
      if (newState[action.activityId]) {
        // 已存在，拼接在后面，瀑布式
        const oldData = newState[action.activityId]
        newList = [...oldData.list, ...newList]
      }
      newState[action.activityId] = { ...action.data, list: newList }
      return newState
    }
    default:
      return state
  }
}

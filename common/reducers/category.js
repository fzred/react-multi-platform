import {
  CATEGORY_1_LEVEL_SET,
  CATEGORY_2_LEVEL_SET,
} from '../types'

const initState = { list: [], fetchDate: 0 }

export default function category(state = initState, action) {
  switch (action.type) {
    case CATEGORY_1_LEVEL_SET: {
      const newState = { ...state }
      newState.list = action.data
      newState.fetchDate = action.fetchDate
      return newState
    }
    case CATEGORY_2_LEVEL_SET: {
      const newState = { ...state }
      newState.list = newState.list.map(item => {
        if (item.cid === action.categId) {
          return { ...item, sublevel: action.data }
        }
        return item
      })
      return newState
    }
    default:
      return state
  }
}

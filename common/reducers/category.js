import {
  CATEGORY_1_LEVEL_SET,
  CATEGORY_2_LEVEL_SET,
} from '../types'

const initState = []

export default function category(state = initState, action) {
  switch (action.type) {
    case CATEGORY_1_LEVEL_SET: {
      const newState = action.data
      newState.fetchDate = action.fetchDate
      return newState
    }
    case CATEGORY_2_LEVEL_SET: {
      return state.map(item => {
        if (item.cid === action.categId) {
          return { ...item, sublevel: action.data }
        }
        return item
      })
    }
    default:
      return state
  }
}

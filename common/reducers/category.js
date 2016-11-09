import {
  CATEGORY_1_LEVEL_SET,
  CATEGORY_2_LEVEL_SET,
} from '../types'

const initState = {
  // 231: {
  //   sublevel: [],
  // },
}

export default function category(state = initState, action) {
  switch (action.type) {
    case CATEGORY_1_LEVEL_SET: {
      const newState = { fetchDate: action.fetchDate }
      action.data.forEach(item => {
        newState[item.cid] = item
      })
      return newState
    }
    case CATEGORY_2_LEVEL_SET: {
      const newState = { ...state }
      newState[action.categId] = { ...newState[action.categId], sublevel: action.data }
      return newState
    }
    default:
      return state
  }
}

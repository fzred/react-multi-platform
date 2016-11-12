import {
  CATEGORY_1_LEVEL_SET,
  CATEGORY_2_LEVEL_SET,
  SEARCH_PRO_LIST_SET,
  SEARCH_PRO_LIST_CONAT,
  SEARCH_PRO_KEY_SET,
} from '../types'

const initState = {
  list: [],
  fetchDate: 0,
  proList: {
    list: [],
    startNum: 0,
  },
  searchParamsStr: '',
}

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
    case SEARCH_PRO_LIST_SET: {
      return { ...state, proList: action.data }
    }
    case SEARCH_PRO_LIST_CONAT: {
      const newState = { ...state }
      const newList = [...action.data.list, ...newState.proList.list]
      newState.proList = { ...action.data, list: newList }
      return newState
    }
    case SEARCH_PRO_KEY_SET: {
      return { ...state, searchParamsStr: action.data }
    }
    default:
      return state
  }
}

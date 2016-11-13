import {
  PRODUCT_ITEM_DETAIL_SET,
  PRODUCT_ITEM_STANBDARD_SET,
  PRODUCT_ITEM_GRAPHIC_DETAIL_SET,
  PRODUCT_ITEM_RECOMMEND_PRODUCT_SET,
} from '../types'

function getInitDate() {
  return {
    detail: {},
    Standard: {},
    graphicDetail: [],
    RecommendProduct: {},
  }
}

const initState = {
  P234901212TEST: getInitDate(),
}


function extendState(state, itemCode) {
  const newState = { ...state }
  if (newState[itemCode]) {
    newState[itemCode] = { ...newState[itemCode] }
  } else {
    newState[itemCode] = getInitDate()
  }
  return newState
}

export default function product(state = initState, action) {
  switch (action.type) {
    case PRODUCT_ITEM_DETAIL_SET: {
      const newState = extendState(state, action.itemCode)
      newState[action.itemCode].detail = action.data
      return newState
    }
    case PRODUCT_ITEM_STANBDARD_SET: {
      const newState = extendState(state, action.itemCode)
      newState[action.itemCode].Standard = action.data
      return newState
    }
    case PRODUCT_ITEM_GRAPHIC_DETAIL_SET: {
      const newState = extendState(state, action.itemCode)
      newState[action.itemCode].graphicDetail = action.data
      return newState
    }
    case PRODUCT_ITEM_RECOMMEND_PRODUCT_SET: {
      const newState = extendState(state, action.itemCode)
      newState[action.itemCode].RecommendProduct = action.data
      return newState
    }
    default:
      return state
  }
}


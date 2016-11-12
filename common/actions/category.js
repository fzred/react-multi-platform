import {
  CATEGORY_1_LEVEL_SET,
  CATEGORY_2_LEVEL_SET,
  SEARCH_PRO_LIST_SET,
  SEARCH_PRO_LIST_CONAT,
  SEARCH_PRO_KEY_SET,
} from '../types'


export function getCategory2Level({ categId }) {
  return (dispatch, getState, { fd }) => (
    fd.get('/b2c-product/api/categ/itemSecondCategList', { categId }).then(({ data }) => {
      dispatch({
        type: CATEGORY_2_LEVEL_SET,
        categId,
        data,
      })
    })
  )
}

export function getCategory1Level() {
  return (dispatch, getState, { fd }) => (
    fd.get('/b2c-product/api/categ/itemCategList').then(({ data }) => {
      dispatch({
        type: CATEGORY_1_LEVEL_SET,
        data,
        fetchDate: Date.now(),
      })
      if (data.length) {
        return dispatch(getCategory2Level({
          categId: data[0].cid,
        }))
      }
      return data
    })
  )
}

export function searchPro(params) {
  return (dispatch, getState, { fd }) => {
    let url = '/b2c-product/api/item/itemList'
    if (params.qryText) {
      // 关键字搜索
      url = '/b2c-product/api/item/searchItemList'
    }
    return fd.get(url, params).then(({ data }) => {
      dispatch({
        type: params.startNum > 0 ? SEARCH_PRO_LIST_CONAT : SEARCH_PRO_LIST_SET,
        data,
      })
    })
  }
}

export function setSearchKey(word) {
  return {
    type: SEARCH_PRO_KEY_SET,
    data: word,
  }
}

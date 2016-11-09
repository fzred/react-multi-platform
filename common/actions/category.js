import {
  CATEGORY_1_LEVEL_SET,
  CATEGORY_2_LEVEL_SET,
} from '../types'


export function getCategory2Level({ categId }) {
  return (dispatch, getState, { fd }) => (
    fd.get('/b2c-product/api/categ/itemCategList', { categId }).then(({ data }) => {
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

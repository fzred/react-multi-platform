import {
  PRODUCT_ITEM_DETAIL_SET,
  PRODUCT_ITEM_STANBDARD_SET,
  PRODUCT_ITEM_GRAPHIC_DETAIL_SET,
  PRODUCT_ITEM_RECOMMEND_PRODUCT_SET,
} from '../types'

export function getDetail({ itemCode }) {
  return (dispatch, getState, { fd }) => (
    fd.get('/b2c-product/api/item/itemDetail', {
      itemCode,
    }).then(({ data }) => {
      dispatch({
        type: PRODUCT_ITEM_DETAIL_SET,
        data,
        itemCode,
      })
    })
  )
}

export function getStandard({ itemCode }) {
  return (dispatch, getState, { fd }) => (
    fd.get('/b2c-product/api/item/itemMoreStandard', {
      itemCode,
    }).then(({ data }) => {
      dispatch({
        type: PRODUCT_ITEM_STANBDARD_SET,
        data,
        itemCode,
      })
    })
  )
}

export function getGraphicDetail({ itemCode }) {
  return (dispatch, getState, { fd }) => (
    fd.get('/b2c-product/api/item/itemGraphicDetail ', {
      itemCode,
    }).then(({ data }) => {
      dispatch({
        type: PRODUCT_ITEM_GRAPHIC_DETAIL_SET,
        data,
        itemCode,
      })
    })
  )
}

export function getRecommendProduct({ itemCode, pageSize = 20, startNum = 0 }) {
  return (dispatch, getState, { fd }) => (
    fd.get('/b2c-product/api/recommend/productRecommend', {
      itemCode,
      pageSize,
      startNum,
    }).then(({ data }) => {
      dispatch({
        type: PRODUCT_ITEM_RECOMMEND_PRODUCT_SET,
        data,
        itemCode,
      })
    })
  )
}


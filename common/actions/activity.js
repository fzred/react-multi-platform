import {
  ACTIVITY_PRODUCT_LIST_SET,
  ACTIVITY_PRODUCT_LIST_CONCAT,
} from '../types'

/* eslint-disable import/prefer-default-export */
export function getProductList({ activityId, startNum }) {
  return (dispatch, getState, { fd }) => (
    fd.get('/b2c-marketing/api/activity/getProductList', {
      activityId,
      startNum,
    }).then(({ data }) => {
      dispatch({
        type: startNum > 0 ? ACTIVITY_PRODUCT_LIST_CONCAT : ACTIVITY_PRODUCT_LIST_SET,
        activityId,
        data,
      })
    })
  )
}

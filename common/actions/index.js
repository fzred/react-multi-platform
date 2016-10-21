import {
  ACTIVITY_PRODUCT_LIST_SET,
  ACTIVITY_PRODUCT_LIST_CONCAT,
} from '../types'

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

export function fetchHomeHeadPageData() {
  return (dispatch, getState, { fd }) => (
    fd.get('/b2c-marketing/api/activity/getHeadPageData')
      .then(({ data }) => {
        if (data) {
          //  eslint-disable-next-line no-param-reassign
          data.fetchDate = Date.now()
        } else {
          //  eslint-disable-next-line no-param-reassign
          data = data || { list: [] }
        }
        dispatch({
          type: 'GET_HOME_MODULE',
          data,
        })
        return data
      })
      .then(data => (Promise.all(
        data.list.map(item => {
          if (item.styleCode === 'product_list_rows') {
            return dispatch(getProductList({
              activityId: item.list[0].activityId,
              startNum: 0,
            }))
          }
          return false
        })
      )))
  )
}

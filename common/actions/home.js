import { getProductList } from './activity'
import { HOME_MODULE_SET } from '../types'

export function getHeadPageData() {
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
          type: HOME_MODULE_SET,
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

export function atest12() {

}

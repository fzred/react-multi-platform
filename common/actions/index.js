import {
  ACTIVITY_PRODUCT_LIST_SET,
  ACTIVITY_PRODUCT_LIST_CONCAT,
} from '../types'

/*  eslint-disable no-param-reassign */

export function getProductList({ activityId, startNum }) {
  return (dispatch, getState, { rend }) => (
    rend.get('/b2c-marketing/api/activity/getProductList', {
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
  return dispatch => (
    fetch('/b2c-marketing/api/activity/getHeadPageData')
      .then(res => res.json())
      .then(({ data }) => {
        if (data) {
          data.fetchDate = Date.now()
        } else {
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

export function getHomeModule() {
  return {
    type: 'GET_HOME_MODULE',
  }
}

export function getHomeModule1() {
  return {
    type: 'GET_HOME_MODULE',
  }
}

export function fetchTest() {
  return dispatch => (
    new Promise(resolve => {
      setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch({
          type: 'FETCH_TEST',
          list: [111, 1],
        })
        resolve()
      }, 1000)
    })
  )
}

export function fetchHomeHeadPageData() {
  return dispatch => {
    return new Promise(resolve => {
      fetch('/b2c-marketing/api/activity/getHeadPageData')
      setTimeout(() => {
        dispatch({
          type: 'GET_HOME_MODULE',
          data: [],
        })
        // Yay! Can invoke sync or async actions with `dispatch`

        resolve()
      }, 1000)
    })
  }
}
// return dispatch => (
//   fetch('/b2c-marketing/api/activity/getHeadPageData')
//     .then(res => res.json())
//     .then(({ data }) => {
//       dispatch({
//         type: 'GET_HOME_MODULE',
//         data,
//       })
//       console.log(data)
//     })
// )
// }

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
  return dispatch => {
    return new Promise(resolve => {
      setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch({
          type: 'FETCH_TEST',
          list: [111, 1],
        })
        resolve()
      }, 1000)
    })
  }
}

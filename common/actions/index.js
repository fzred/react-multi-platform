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

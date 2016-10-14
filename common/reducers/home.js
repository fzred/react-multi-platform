export default function home(state = { list: [] }, action) {
  switch (action.type) {
    case 'GET_HOME_MODULE':
      return action.data
    default:
      return state
  }
}

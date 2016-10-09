export default function home(state = [{ type: 1 }], action) {
  switch (action.type) {
    case 'GET_HOME_MODULE':
      return action.data
    default:
      return state
  }
}

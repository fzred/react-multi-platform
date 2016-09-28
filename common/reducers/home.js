export default function home(state = [{ type: 1 }], action) {
  switch (action.type) {
    case 'GET_HOME_MODULE':
      return [
        { type: 1 },
        { type: 2 },
      ]
    default:
      return state
  }
}

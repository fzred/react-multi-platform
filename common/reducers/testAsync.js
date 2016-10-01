export default function testAsync(state = [{ type: 1 }], action) {
  switch (action.type) {
    case 'FETCH_TEST':
      return action.list
    default:
      return state
  }
}

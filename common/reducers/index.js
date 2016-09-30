import { combineReducers } from 'redux'
import home from './home'
import testAsync from './testAsync'

const App = combineReducers({
  home,
  testAsync,
})

export default App

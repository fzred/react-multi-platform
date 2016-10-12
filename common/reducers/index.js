import { combineReducers } from 'redux'
import home from './home'
import activityProductList from './activityProductList'
import testAsync from './testAsync'

const App = combineReducers({
  home,
  activityProductList,
  testAsync,
})

export default App

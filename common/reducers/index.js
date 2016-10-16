import { combineReducers } from 'redux'
import home from './home'
import activityProductList from './activityProductList'
import { usersInfo } from './user'

const App = combineReducers({
  home,
  activityProductList,
  usersInfo,
})

export default App

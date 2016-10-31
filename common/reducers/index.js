import { combineReducers } from 'redux'
import home from './home'
import activityProductList from './activityProductList'
import { usersInfo } from './user'
import loadingCount from './loadingCount'

const App = combineReducers({
  home,
  activityProductList,
  usersInfo,
  loadingCount,
})

export default App

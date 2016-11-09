import { combineReducers } from 'redux'
import home from './home'
import activityProductList from './activityProductList'
import { usersInfo } from './user'
import loadingCount from './loadingCount'
import category from './category'

const App = combineReducers({
  home,
  activityProductList,
  usersInfo,
  loadingCount,
  category,
})

export default App

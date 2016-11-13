import { combineReducers } from 'redux'
import home from './home'
import activityProductList from './activityProductList'
import { usersInfo } from './user'
import loadingCount from './loadingCount'
import category from './category'
import product from './product'

const App = combineReducers({
  home,
  activityProductList,
  usersInfo,
  loadingCount,
  category,
  product,
})

export default App

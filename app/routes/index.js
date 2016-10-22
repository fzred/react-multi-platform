import NavTabs from './NavTabs'
import Login from './Login'

export default {
  navTabs() {
    return { name: 'Home', component: NavTabs }
  },
  login() {
    return { name: 'login', component: Login }
  },
}

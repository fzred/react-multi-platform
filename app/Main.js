import React, { Component, PropTypes } from 'react'
import {
  Navigator,
} from 'react-native'
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import http from './http'

const store = configureStore({}, {
  fd: http,
})

class Main extends Component {

  static childContextTypes = {
    store: PropTypes.object.isRequired,
  }

  getChildContext() { // eslint-disable-line class-methods-use-this
    return {
      store,
    }
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={routes.login()}
          configureScene={(route) => {
            console.log(route.name)
            return Navigator.SceneConfigs.FloatFromBottom
          }}
          renderScene={(route, navigator) => {
            const RouteComponent = route.component
            console.log(route.name)
            return <RouteComponent {...route.params} navigator={navigator} />
          }}
        />
      </Provider>
    )
  }

}

export default Main

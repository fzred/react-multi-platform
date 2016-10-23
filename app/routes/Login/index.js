import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import routes from '../index'

class Login extends Component {
  static contextTypes = {
    nav: PropTypes.object,
  }

  constructor() {
    super()
    this.pressButton = this.pressButton.bind(this)
  }


  pressButton() {
    this.context.nav.push(routes.navTabs())
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.pressButton}>
          <Text>这里是登录页</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default Login

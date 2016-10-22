import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import routes from '../index'

class Login extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  }

  constructor() {
    super()
    this.pressButton = this.pressButton.bind(this)
  }


  pressButton() {
    const { navigator } = this.props
    navigator.push(routes.navTabs())
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

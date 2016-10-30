import React, { PropTypes, Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import routes from '../../index'

export default class extends Component {

  static contextTypes = {
    nav: PropTypes.object,
  }

  constructor() {
    super()
    this.pressButton = this.pressButton.bind(this)
  }

  pressButton() {
    this.context.nav.push(routes.login())
    // if (navigator) {
    //   navigator.pop()
    // }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.pressButton}>
          <Text>去登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

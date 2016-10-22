import React, { PropTypes, Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import routes from '../../index'

export default class extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  }

  constructor() {
    super()
    this.pressButton = this.pressButton.bind(this)
  }

  pressButton() {
    const { navigator } = this.props
    navigator.push(routes.login())
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

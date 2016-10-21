import React, { PropTypes, Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

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
    if (navigator) {
      navigator.pop()
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.pressButton}>
          <Text>Dear，这里是分类页面，去首页</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

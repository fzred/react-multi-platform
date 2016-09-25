import React, { Component } from 'react'
import {
  Navigator,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
export default class extends Component {
  _pressButton() {
    const { navigator } = this.props
    if (navigator) {
      navigator.pop()
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>Dear，这里是分类页面，去首页</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

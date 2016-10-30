import React, { PropTypes, Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import Link from '../../../components/Link'

export default class extends Component {

  static contextTypes = {
    nav: PropTypes.object,
  }

  render() {
    return (
      <View>
        <Link to={{ name: 'login' }}>
          <Text>去登录</Text>
        </Link>
      </View>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import routes from '../index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class Login extends Component {
  static contextTypes = {
    nav: PropTypes.object,
    toast: PropTypes.object,
  }

  constructor() {
    super()
    this.pressButton = this.pressButton.bind(this)
  }


  pressButton() {
    this.context.toast.show('111')
    // this.context.nav.push(routes.navTabs())
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pressButton}>
          <Text>这里是登录页</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default Login

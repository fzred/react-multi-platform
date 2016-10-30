import React, { Component, PropTypes } from 'react'
import {
  TouchableOpacity,
} from 'react-native'


class Link extends Component {

  static propTypes = {
    to: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]).isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  static contextTypes = {
    nav: PropTypes.object,
  }

  handleClick = () => {
    this.context.nav.push(this.props.to)
  }

  render() {
    const { children, ...props } = this.props
    return <TouchableOpacity {...props} onPress={this.handleClick}>{children}</TouchableOpacity>
  }

}

export default Link

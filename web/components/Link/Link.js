import React, { Component, PropTypes } from 'react'

function isLeftClickEvent(event) {
  return event.button === 0
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

class Link extends Component {

  static propTypes = {
    to: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]).isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
    toPath: PropTypes.func.isRequired,
  }

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return
    }

    if (event.defaultPrevented === true) {
      return
    }

    event.preventDefault()
    this.context.history.push(this.parsePath(this.props.to))
  }

  parsePath(to) {
    if (typeof to === 'string') {
      return to
    }
    return this.context.toPath(to)
  }

  render() {
    const { to, children, ...props } = this.props
    return <a href={this.parsePath(to)} {...props} onClick={this.handleClick}>{children}</a>
  }

}

export default Link

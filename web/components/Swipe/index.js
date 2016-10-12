import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import swipe from 'swipe-js-iso'
import s from './index.css'

class Swipe extends Component {

  static propTypes = {
    swipeOptions: PropTypes.shape({
      startSlide: PropTypes.number,
      speed: PropTypes.number,
      auto: PropTypes.number,
      continuous: PropTypes.bool,
      disableScroll: PropTypes.bool,
      stopPropagation: PropTypes.bool,
      swiping: PropTypes.func,
      callback: PropTypes.func,
      transitionEnd: PropTypes.func,
    }),
    style: PropTypes.shape({
      container: PropTypes.object,
      wrapper: PropTypes.object,
      child: PropTypes.object,
    }),
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.array,
  }

  static defaultProps = {
    swipeOptions: {},
    style: {
      container: {
        overflow: 'hidden',
        position: 'relative',
      },

      wrapper: {
        overflow: 'hidden',
        position: 'relative',
      },

      child: {
        float: 'left',
        width: '100%',
        position: 'relative',
        transitionProperty: 'transform',
      },
    },
    className: '',
  };

  constructor() {
    super()
    this.state = {
      curIndex: 0,
    }
  }


  componentDidMount() {
    const { swipeOptions } = this.props
    const callback = swipeOptions.callback
    swipeOptions.callback = i => {
      if (callback) callback(i)
      this.setState({
        curIndex: i,
      })
    }
    this.swipe = swipe(this.container, swipeOptions)
  }


  componentWillUnmount() {
    this.swipe.kill()
    this.swipe = undefined
  }


  getPos() {
    return this.swipe.getPos()
  }


  getNumSlides() {
    return this.swipe.getNumSlides()
  }

  next() {
    this.swipe.next()
  }

  slide(...args) {
    this.swipe.slide(...args)
  }

  prev() {
    this.swipe.prev()
  }

  render() {
    const { id, className, style, children } = this.props

    return (
      <div
        ref={(c) => {
          this.container = c
        }}
        id={id}
        className={`react-swipe-container ${className}`}
        style={style.container}
      >
        <div style={style.wrapper}>
          {React.Children.map(children, (child) => (
            React.cloneElement(child, { style: style.child })
          ))}
        </div>
        <div className={s.dotted}>
          {React.Children.map(children, (child, i) => (
            <i className={this.state.curIndex === i ? s.dottedActive : ''}>{i + 1}</i>
          ))}
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Swipe)

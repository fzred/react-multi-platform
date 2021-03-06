import React, { Component, PropTypes } from 'react'

class Pager extends Component {

  static propTypes = {
    pageSize: PropTypes.number,
    startNum: PropTypes.number,
    onLoad: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    model: PropTypes.object,
  }

  static defaultProps = {
    startNum: 0,
    pageSize: 10,
  }

  constructor() {
    super()
    this.state = {
      loading: false,
      noMore: false,
      startNum: 0,
    }
    this.onScrollHandle = this.onScrollHandle.bind(this)
  }

  componentWillMount() {
    this.setState({
      startNum: this.props.startNum,
    })
    this.computedModelState()
  }

  componentDidMount() {
    this.elScroll = document.querySelector('#scroll')
    this.elScroll.addEventListener('scroll', this.onScrollHandle)
  }

  componentWillUnmount() {
    this.elScroll.removeEventListener('scroll', this.onScrollHandle)
  }

  onScrollHandle() {
    if (window.innerHeight + this.elScroll.scrollTop + 50 >= this.elScroll.scrollHeight) {
      this.loadNextPageData()
      console.log('到底') // eslint-disable-line no-console
    }
  }

  computedModelState() {
    if (this.props.model) {
      this.setState({
        // 判断数据 是否已加载完
        noMore: this.props.model.list.length < this.props.model.startNum,
        startNum: this.props.model.startNum,
      })
    }
  }

  reloadData() {
    return this._loadData(0)
  }

  loadNextPageData() {
    return this._loadData()
  }

  async _loadData(startNum = this.state.startNum) {
    if (this.state.loading || this.state.noMore) {
      return
    }
    const { onLoad, pageSize } = this.props
    this.setState({
      loading: true,
    })
    await onLoad({ startNum, pageSize })
    this.setState({
      loading: false,
    })
    if (this.props.model) {
      this.computedModelState()
    } else {
      this.setState({
        noMore: true,
        startNum: 0,
      })
    }
  }

  render() {
    const { children } = this.props
    let elFoot
    if (this.state.noMore) {
      elFoot = (
        <div style={{ padding: '40px', textAlign: 'center' }}>没有更多数据</div>
      )
    }
    return (
      <div>
        {React.Children.only(children)}
        {elFoot}
      </div>
    )
  }
}

export default Pager

import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import px2rem from '../../../../common/px2rem'
import { getProductList } from '../../../../../common/actions'

class ProductListRows extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    productList: PropTypes.object.isRequired,
  }

  // componentDidMount() {
  //   const { dispatch, item } = this.props
  //   // const activityId = item.list[0].activityId
  //   const activityId = '1610071404580334'
  //   dispatch(getProductList({
  //     activityId,
  //     startNum: 0,
  //   }))
  // }

  render() {
    const { item, productList } = this.props
    return (
      <div
        className={`flex ${s.root}`}
        style={{ marginBottom: `${px2rem(item.margin)}rem` }}
      >
        {JSON.stringify(productList)}
      </div>
    )
  }
}

export default connect(state => ({
  productList: state.activityProductList,
}))(withStyles(s)(ProductListRows))

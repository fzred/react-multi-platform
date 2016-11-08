import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Pager from '../../../../components/Pager'
import { getProductList } from '../../../../../common/actions/activity'

@connect(state => ({ productList: state.activityProductList }))
@withStyles(s)
class ProductListRows extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    productList: PropTypes.object, // isRequired ws会警告
  }

  constructor() {
    super()
    this.fetchProList = this.fetchProList.bind(this)
  }

  fetchProList({ startNum }) {
    const { dispatch, item } = this.props
    const activityId = item.list[0].activityId
    return dispatch(getProductList({
      activityId,
      startNum,
    }))
  }

  render() {
    const { item, productList } = this.props
    const model = productList[item.list[0].activityId]
    return (
      <div className={s.root}>
        <Pager onLoad={this.fetchProList} model={model}>
          <ul>
            {
              model.list.map((pro, i) => (
                <li key={i}>
                  <div className={s.imgWrap}>
                    <img className={s.imgLogo} src={pro.itemLogoUrl} alt={pro.itemTitle} />
                  </div>
                  <div className={`lineClamp2 ${s.name}`}>{pro.itemTitle}</div>
                  <div className={`flex ${s.priceOrigin}`}>
                    <div className={s.price}>￥{pro.salePrice.toFixed(2)}</div>
                    <div className={s.origin}>{pro.country}</div>
                  </div>
                </li>
              ))
            }
          </ul>
        </Pager>
      </div>
    )
  }
}

export default ProductListRows

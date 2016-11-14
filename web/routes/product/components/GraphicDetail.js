import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './GraphicDetail.css'

@connect(state => ({
  product: state.product,
}))
@withStyles(s)
class GraphicDetail extends Component {
  static propTypes = {
    product: PropTypes.object,
    itemCode: PropTypes.string.isRequired,
  }

  render() {
    const product = this.props.product[this.props.itemCode]
    return (
      <div className={s.imgs}>
        {
          product.graphicDetail.map((item, i) => (
            <img src={item} alt={i} key={i} className={s.detailImg} />
          ))
        }
      </div>
    )
  }

}

export default GraphicDetail

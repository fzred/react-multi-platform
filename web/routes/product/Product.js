import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../components/Layout'
import s from './Product.css'

@connect(state => ({
  product: state.product,
}))
@withStyles(s)
class Product extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    product: PropTypes.object,
    itemCode: PropTypes.string.isRequired,
  }

  render() {
    const product = this.props.product[this.props.itemCode]
    return (
      <Layout>
        <div>{JSON.stringify(product)}</div>
      </Layout>
    )
  }

}

export default Product

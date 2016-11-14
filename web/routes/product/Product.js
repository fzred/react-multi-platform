import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../components/Layout'
import GraphicDetail from './components/GraphicDetail'
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
    const itemCode = this.props.itemCode
    const product = this.props.product[itemCode]
    return (
      <Layout>
        <div>
          {JSON.stringify(product)}
          <GraphicDetail itemCode={itemCode} />
        </div>
      </Layout>
    )
  }

}

export default Product

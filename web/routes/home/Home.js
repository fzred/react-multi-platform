import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../components/Layout'
import BannerList from './components/BannerList'
import HorizontalTwoAct from './components/HorizontalTwoAct'
import ProductListRows from './components/ProductListRows'
import FootNav from '../../components/FootNav'

import s from './Home.css'

function renderMudule(item, i) {
  switch (item.styleCode) {
    case 'banner_list':
      return <BannerList key={i} item={item} />
    case 'horizontal_two_act':
      return <HorizontalTwoAct key={i} item={item} />
    case 'product_list_rows':
      return <ProductListRows key={i} item={item} />
    default:
      return null
  }
}

function Home({ homeList }) {
  const footHtml = (
    <div>
      <FootNav active="home" />
    </div>
  )
  return (
    <Layout layer={footHtml}>
      <div className={s.root}>
        {homeList.list.map(renderMudule)}
      </div>
    </ Layout>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  homeList: PropTypes.object,
}

export default connect(state => ({
  homeList: state.home,
}))(withStyles(s)(Home))

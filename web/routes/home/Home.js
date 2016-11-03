import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../components/Layout'
import HomeTemplate from '../../components/HomeTemplate/index'
import FootNav from '../../components/FootNav'
import s from './Home.css'

function Home({ homeList }) {
  const footHtml = (
    <div>
      <FootNav active="home" />
    </div>
  )
  return (
    <Layout layer={footHtml}>
      <div className={s.root}>
        <HomeTemplate template={homeList} />
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

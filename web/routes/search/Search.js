import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../components/Layout'
import FootNav from '../../components/FootNav'

import s from './Search.css'


function Home() {
  const footHtml = (
    <div>
      <FootNav active="search" />
    </div>
  )
  return (
    <Layout layer={footHtml}>
      <div className={s.root}>
        search34
      </div>
    </ Layout>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => ({}))(withStyles(s)(Home))

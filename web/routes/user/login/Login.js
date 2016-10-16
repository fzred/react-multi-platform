import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../../components/Layout'
import FootNav from '../../../components/FootNav'

import s from './Login.css'


function Login() {
  const footHtml = (
    <div>
      <FootNav active="user" />
    </div>
  )
  return (
    <Layout layer={footHtml}>
      <div className={s.root}>
        user/login
      </div>
    </ Layout>
  )
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => ({}))(withStyles(s)(Login))

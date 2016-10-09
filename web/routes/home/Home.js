/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../components/Layout'
import s from './Home.css'

function Home({ homeList, testAsync }) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>React.js News</h1>
          <ul className={s.news}>
            <li>12312</li>
            <li>12312</li>
          </ul>
          <div>
            {JSON.stringify(homeList)}<br />
            {JSON.stringify(testAsync)}
            <form>
              <button type="submit">
                Add Todo
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  homeList: PropTypes.object,
  testAsync: PropTypes.array,
}

export default connect(state => ({
  homeList: state.home,
  testAsync: state.testAsync,
}))(withStyles(s)(Home))

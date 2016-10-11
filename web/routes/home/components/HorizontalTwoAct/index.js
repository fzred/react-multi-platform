import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'

function BannerList({ item }) {
  return (
    <div className="flex">
      horizontal_two_act
    </div>
  )
}

BannerList.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withStyles(s)(BannerList)

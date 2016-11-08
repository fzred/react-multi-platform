import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'

function BannerList({ item }) {
  return (
    <div className={`flex ${s.root}`}>
      <a href={item.list[0].actLink}>
        <img src={item.list[0].bannerImg} alt={item.list[0].activityName} />
      </a>
      <a href={item.list[1].actLink}>
        <img src={item.list[1].bannerImg} alt={item.list[1].activityName} />
      </a>
    </div>
  )
}

BannerList.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withStyles(s)(BannerList)

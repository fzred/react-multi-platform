import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'

function BannerList({ item }) {
  return (
    <div className={s.root}>
      <ul>
        {
          item.list.map((act, i) => (
            <li key={i}>
              <a href={act.actLink}>
                <img className={s.img} src={act.bannerImg} alt={act.activityName} />
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

BannerList.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withStyles(s)(BannerList)

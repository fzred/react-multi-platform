import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import ReactSwipe from 'react-swipe'
import s from './index.css'

function BannerList({ item }) {
  return (
    <div className={s.bannerWrap}>
      <ReactSwipe
        swipeOptions={{}}
      >
        {
          item.list.map((img, i) => (
            <a href={img.actLink} key={i}>
              <img src={img.bannerImg} alt={img.activityName} />
            </a>
          ))
        }
      </ReactSwipe>
    </div>
  )
}

BannerList.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withStyles(s)(BannerList)

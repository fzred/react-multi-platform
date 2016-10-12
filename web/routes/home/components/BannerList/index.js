import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Swipe from '../../../../components/Swipe'
import px2rem from '../../../../common/px2rem'

function BannerList({ item }) {
  return (
    <div
      className={s.bannerWrap}
      style={{ marginBottom: `${px2rem(item.margin)}rem` }}
    >
      <Swipe
        swipeOptions={{ auto: 3000 }}
      >
        {
          item.list.map((img, i) => (
            <a href={img.actLink} key={i}>
              <img className={s.bannerImg} src={img.bannerImg} alt={img.activityName} />
            </a>
          ))
        }
      </Swipe>
    </div>
  )
}

BannerList.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withStyles(s)(BannerList)

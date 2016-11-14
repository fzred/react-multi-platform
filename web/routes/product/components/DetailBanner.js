import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Swipe from '../../../components/Swipe'
import s from './DetailBanner.css'

function DetailBanner({ product, itemCode }) {
  const detail = product[itemCode].detail
  return (
    <div className={s.root}>
      <div className={s.bannerWrap}>
        <Swipe swipeOptions={{ auto: 3000 }}>
          {
            detail.imageList.map((src, i) => (
              <img key={i} className={s.bannerImg} src={src} alt={src} />
            ))
          }
        </Swipe>
      </div>
    </div>
  )
}

DetailBanner.propTypes = {
  product: PropTypes.object,
  itemCode: PropTypes.string.isRequired,
}

export default connect(state => ({
  product: state.product,
}))(withStyles(s)(DetailBanner))

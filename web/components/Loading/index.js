import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import cns from 'classnames'
import s from './index.css'

function Loading({ loadingCount }) {
  return (
    <div className={cns(s.root, loadingCount < 1 ? 'hide' : '')}>
      <div className={s.spinner}>
        <div className={cns(s.spinnerContainer, s.container1)}>
          <div className={s.circle1} />
          <div className={s.circle2} />
          <div className={s.circle3} />
          <div className={s.circle4} />
        </div>
        <div className={cns(s.spinnerContainer, s.container2)}>
          <div className={s.circle1} />
          <div className={s.circle2} />
          <div className={s.circle3} />
          <div className={s.circle4} />
        </div>
        <div className={cns(s.spinnerContainer, s.container3)}>
          <div className={s.circle1} />
          <div className={s.circle2} />
          <div className={s.circle3} />
          <div className={s.circle4} />
        </div>
      </div>
    </div>
  )
}

Loading.propTypes = {
  loadingCount: PropTypes.number.isRequired,
}

export default connect(state => ({
  loadingCount: state.loadingCount,
}))(withStyles(s)(Loading))

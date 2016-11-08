import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './index.css'

function HeadCategory2({ item }) {
  const list = item.list
  return (
    <div className={s.root}>
      <div className={`flex ${s.bottom}`}>
        {
          list.slice(0, 4).map((category, i) => (
            <a key={i}>
              <img src={category.logoImg} alt={category.categName} />
            </a>
          ))
        }
      </div>
      <div className={`flex ${s.bottom}`}>
        {
          list.slice(4, 8).map((category, i) => (
            <a key={i}>
              <img src={category.logoImg} alt={category.categName} />
            </a>
          ))
        }
      </div>
    </div>
  )
}

HeadCategory2.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withStyles(s)(HeadCategory2)

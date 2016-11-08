import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './index.css'

function HeadCategory1({ item }) {
  const list = item.list
  return (
    <div className={s.root}>
      <div className={`flex ${s.top}`}>
        <div>
          <a>
            <img src={list[0].logoImg} alt={list[0].categName} />
          </a>
        </div>
        <div>
          <a>
            <img src={list[1].logoImg} alt={list[1].categName} />
          </a>
          <a>
            <img src={list[2].logoImg} alt={list[2].categName} />
          </a>
        </div>
      </div>
      <div className={`flex ${s.bottom}`}>
        <a>
          <img src={list[3].logoImg} alt={list[3].categName} />
        </a>
        <a>
          <img src={list[4].logoImg} alt={list[4].categName} />
        </a>
        <a>
          <img src={list[5].logoImg} alt={list[5].categName} />
        </a>
        <a>
          <img src={list[6].logoImg} alt={list[6].categName} />
        </a>
        <a>
          <img src={list[7].logoImg} alt={list[7].categName} />
        </a>
      </div>
    </div>
  )
}

HeadCategory1.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withStyles(s)(HeadCategory1)

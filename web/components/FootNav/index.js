import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import classNames from 'classnames/bind'
import s from './index.css'

const cx = classNames.bind(s)
function FootNav({ children, active }) {
  return (
    <div className={`flex ${s.root}`}>
      {children ? React.Children.only(children) : ''}
      <nav className={`flex ${s.nav}`}>
        <a
          className={cx({
            navBtn: true,
            home: active !== 'home',
            homeActive: active === 'home',
          })}
        >首页</a>
        <a
          className={cx({
            navBtn: true,
            search: active !== 'search',
            searchActive: active === 'search',
          })}
        >分类</a>
        <a
          className={cx({
            navBtn: true,
            activelist: active !== 'activelist',
            activelistActive: active === 'activelist',
          })}
        >活动</a>
        <a
          className={cx({
            navBtn: true,
            cart: active !== 'cart',
            cartActive: active === 'cart',
          })}
        >购物车</a>
        <a
          className={cx({
            navBtn: true,
            user: active !== 'user',
            userActive: active === 'user',
          })}
        >我的</a>
      </nav>
    </div>
  )
}

FootNav.propTypes = {
  children: PropTypes.element,
  active: PropTypes.string.isRequired,
}

export default withStyles(s)(FootNav)

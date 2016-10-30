import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import classNames from 'classnames/bind'
import Link from '../Link'
import s from './index.css'

const cx = classNames.bind(s)
function FootNav({ children, active }) {
  return (
    <div className={`flex ${s.root}`}>
      {children ? React.Children.only(children) : ''}
      <nav className={`flex ${s.nav}`}>
        <Link
          className={cx({
            navBtn: true,
            home: active !== 'home',
            homeActive: active === 'home',
          })}
          to="/"
        >首页</Link>
        <Link
          className={cx({
            navBtn: true,
            search: active !== 'search',
            searchActive: active === 'search',
          })}
          to={{ name: 'search', params: { word: 'ff' } }}
        >分类</Link>
        <a
          className={cx({
            navBtn: true,
            activelist: active !== 'activelist',
            activelistActive: active === 'activelist',
          })}
        >活动</a>
        <Link
          className={cx({
            navBtn: true,
            cart: active !== 'cart',
            cartActive: active === 'cart',
          })}
          to="/cart"
        >购物车</Link>
        <Link
          className={cx({
            navBtn: true,
            user: active !== 'user',
            userActive: active === 'user',
          })}
          to="/user"
        >我的</Link>
      </nav>
    </div>
  )
}

FootNav.propTypes = {
  children: PropTypes.element,
  active: PropTypes.string.isRequired,
}

export default withStyles(s)(FootNav)

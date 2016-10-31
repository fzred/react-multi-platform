import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Loading from '../Loading'
import s from './Layout.css'

function Layout({ children, layer }) {
  let layerHtml
  if (layer) {
    layerHtml = React.Children.only(layer)
  }
  return (
    <div className={s.scrollWrap}>
      <div id="scroll" className={s.scroll}>
        {React.Children.only(children)}
      </div>
      {layerHtml}
      <Loading />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  layer: PropTypes.element,
}

export default withStyles(s)(Layout)

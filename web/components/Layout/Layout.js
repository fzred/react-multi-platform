/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
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
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  layer: PropTypes.element,
}

export default withStyles(s)(Layout)

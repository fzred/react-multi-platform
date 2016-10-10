/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react'

const sc = `
          ;(function(win, lib) {
          var doc = win.document;
          var docEl = doc.documentElement;
          var metaEl = doc.querySelector('meta[name="viewport"]');
          var flexibleEl = doc.querySelector('meta[name="flexible"]');
          var dpr = 0;
          var scale = 0;
          var tid;
          var flexible = lib.flexible || (lib.flexible = {});

          if (metaEl) {
          console.warn('将根据已有的meta标签来设置缩放比例');
          var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
          if (match) {
          scale = parseFloat(match[1]);
          dpr = parseInt(1 / scale);
        }
        } else if (flexibleEl) {
          var content = flexibleEl.getAttribute('content');
          if (content) {
          var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
          var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
          if (initialDpr) {
          dpr = parseFloat(initialDpr[1]);
          scale = parseFloat((1 / dpr).toFixed(2));
        }
          if (maximumDpr) {
          dpr = parseFloat(maximumDpr[1]);
          scale = parseFloat((1 / dpr).toFixed(2));
        }
        }
        }

          if (!dpr && !scale) {
          var isAndroid = win.navigator.appVersion.match(/android/gi);
          var isIPhone = win.navigator.appVersion.match(/iphone/gi);
          var devicePixelRatio = win.devicePixelRatio;
          if (isIPhone) {
          // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
          if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
          dpr = 3;
        } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
          dpr = 2;
        } else {
          dpr = 1;
        }
        } else {
          // 其他设备下，仍旧使用1倍的方案
          dpr = 1;
        }
          scale = 1 / dpr;
        }

          docEl.setAttribute('data-dpr', dpr);
          if (!metaEl) {
          metaEl = doc.createElement('meta');
          metaEl.setAttribute('name', 'viewport');
          metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
          if (docEl.firstElementChild) {
          docEl.firstElementChild.appendChild(metaEl);
        } else {
          var wrap = doc.createElement('div');
          wrap.appendChild(metaEl);
          doc.write(wrap.innerHTML);
        }
        }

          function refreshRem(){
          var width = docEl.getBoundingClientRect().width;
          if (width / dpr > 540) {
          width = 540 * dpr;
        }
          var rem = width / 10;
          docEl.style.fontSize = rem + 'px';
          flexible.rem = win.rem = rem;
        }

          win.addEventListener('resize', function() {
          clearTimeout(tid);
          tid = setTimeout(refreshRem, 300);
        }, false);
          win.addEventListener('pageshow', function(e) {
          if (e.persisted) {
          clearTimeout(tid);
          tid = setTimeout(refreshRem, 300);
        }
        }, false);
          doc.body.style.fontSize = 12 * dpr + 'px';

          if (doc.readyState === 'complete') {
          doc.body.style.fontSize = 12 * dpr + 'px';
        } else {
          doc.addEventListener('DOMContentLoaded', function(e) {
          doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
        }


          refreshRem();

          flexible.dpr = win.dpr = dpr;
          flexible.refreshRem = refreshRem;
          flexible.rem2px = function(d) {
          var val = parseFloat(d) * this.rem;
          if (typeof d === 'string' && d.match(/rem$/)) {
          val += 'px';
        }
          return val;
        }
          flexible.px2rem = function(d) {
          var val = parseFloat(d) / this.rem;
          if (typeof d === 'string' && d.match(/px$/)) {
          val += 'rem';
        }
          return val;
        }

        })(window, window['lib'] || (window['lib'] = {}));
     `
function Html({ title, description, style, script, children, state }) {
  return (
    <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />

        {style && <style id="css" dangerouslySetInnerHTML={{ __html: style }} />}
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: sc }} />
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {script && (
          <script
            id="source"
            src={script}
            data-initial-state={JSON.stringify(state)}
          />
        )}
      </body>
    </html>
  )
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string,
  script: PropTypes.string,
  children: PropTypes.string,
  state: PropTypes.object.isRequired,
}

export default Html

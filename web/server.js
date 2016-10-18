/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill'
import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOM from 'react-dom/server'
import createMemoryHistory from 'history/createMemoryHistory'
import PrettyError from 'pretty-error'
import httpProxy from 'http-proxy'
import Rend from '../common/http'
import UniversalRouter from './universalRouter'
import App from './components/App'
import Html from './components/Html'
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage'
import errorPageStyle from './routes/error/ErrorPage.css'
import routes from './routes'
import assets from './assets' // eslint-disable-line import/no-unresolved
import { port, proxyUrl } from './config'
import configureStore from './store/configureStore'
import interceptorsServer from './http/interceptor/server'
import interceptorsErrCatch from './http/interceptor/errCatch'
import fetch, { Headers } from './core/fetch'

// global.fetch = fetch
// global.Headers = Headers
// global.Response = Response
// global.Request = Request
const app = express()
//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {}
global.navigator.userAgent = global.navigator.userAgent || 'all'

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//
// AIP 代理
// -----------------------------------------------------------------------------
const proxy = httpProxy.createProxyServer({
  target: proxyUrl,
  changeOrigin: true,
})
proxy.on('proxyReq', (proxyReq, req, res, options) => {
  proxyReq.setHeader('A-CID', 'MORNING-STAR')
})
proxy.on('error', (err, req, res) => {
//  res.writeHead(500, {
//    'Content-Type': 'text/plain',
//  })
  res.send({
    obj: null,
    errCode: 1,
    errMsg: err.toString(),
  })
})
app.all(/(\/api\/.*)|(\/b2c-\/.*)/, (req, res) => {
  proxy.web(req, res)
})

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async(req, res, next) => {
  try {
    const rend = new Rend({ fetch, Headers })
    interceptorsServer(rend, { req })
    interceptorsErrCatch(rend)
    const store = configureStore({}, {
      cookie: req.headers.cookie,
      rend,
    })

    const css = new Set()

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Navigation manager, e.g. history.push('/home')
      // https://github.com/mjackson/history
      history: createMemoryHistory({
        initialEntries: [req.url],
      }),
      store,
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()))
      },
    }
    const route = await UniversalRouter.resolve(routes, {
      path: req.path,
      query: req.query,
      store,
      redirect(to) {
        const error = new Error(`Redirecting to "${to}"...`)
        error.status = 301
        error.path = to
        throw error
      },
    })

    const data = { ...route }
    data.children = ReactDOM.renderToString((
      <App context={context}>
        {route.component}
      </App>
    ))
    data.style = [...css].join('')
    data.state = store.getState()
    data.script = assets.main.js
    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />)

    res.status(route.status || 200)
    res.send(`<!doctype html>${html}`)
  } catch (err) {
    if (err.status === 301) {
      res.redirect(err.path || '/')
      return
    }
    next(err)
  }
})

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError()
pe.skipNodeFiles()
pe.skipPackage('express')

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)) // eslint-disable-line no-console
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      style={errorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>
  )
  res.status(err.status || 500)
  res.send(`<!doctype html>${html}`)
})

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`)
})
/* eslint-enable no-console */

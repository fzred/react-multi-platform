/**
 * 浏览器端入口文件
 * @flow
 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import queryString from 'query-string'
import createBrowserHistory from 'history/createBrowserHistory'
import { createPath } from 'history/PathUtils'
import UniversalRouter from '../common/universalRouter'
import configureStore from './store/configureStore'
import App from './components/App'
import fetch, { Headers } from './core/fetch'
import FetchDog from '../common/http'
import { getPageScroll, scrollTo } from './common/utils'
import RedirectError from './http/RedirectError'
import interceptorsErrCatch from './http/interceptor/errCatch'
import interceptorsClient from './http/interceptor/client'

const fd = new FetchDog({ fetch, Headers })
const initialState = JSON.parse(
  // $FlowIgnore 参数为 string 或 null undefined
  document
    .getElementById('source')
    .getAttribute('data-initial-state')
)

const store = configureStore(initialState, {
  history,
  fd,
})

interceptorsErrCatch(fd)
interceptorsClient(fd, { store })

let routes = require('./routes').default
// Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html
const context = {
  // Navigation manager, e.g. history.push('/home')
  // https://github.com/mjackson/history
  history: createBrowserHistory(),
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: (...styles) => {
    // eslint-disable-next-line no-underscore-dangle
    const removeCss = styles.map(x => x._insertCss())
    return () => {
      removeCss.forEach(f => f())
    }
  },
  store,
  toPath: to => UniversalRouter.matchRoutePathByName(routes, to),
}

function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  const node = document.head.querySelector(`${tagName}[${keyName}=${keyValue}]`)
  if (node && node.getAttribute(attrName) === attrValue) return

  // Remove and create a new tag in order to make it work with bookmarks in Safari
  if (node && node.parentNode) {
    node.parentNode.removeChild(node)
  }
  if (typeof attrValue === 'string') {
    const nextNode = document.createElement(tagName)
    nextNode.setAttribute(keyName, keyValue)
    nextNode.setAttribute(attrName, attrValue)
    document.head.appendChild(nextNode)
  }
}
function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content)
}
function updateCustomMeta(property, content) { // eslint-disable-line no-unused-vars
  updateTag('meta', 'property', property, 'content', content)
}
function updateLink(rel, href) { // eslint-disable-line no-unused-vars
  updateTag('link', 'rel', rel, 'href', href)
}

// Switch off the native scroll restoration behavior and handle it manually
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
const scrollPositionsHistory = {}
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

let onRenderComplete = function initialRenderComplete() {
  const elem = document.getElementById('css')
  if (elem && elem.parentNode) elem.parentNode.removeChild(elem)
  onRenderComplete = function renderComplete(route, location) {
    document.title = route.title

    updateMeta('description', route.description)
    // Update necessary tags in <head> at runtime here, ie:
    // updateMeta('keywords', route.keywords);
    // updateCustomMeta('og:url', route.canonicalUrl);
    // updateCustomMeta('og:image', route.imageUrl);
    // updateLink('canonical', route.canonicalUrl);
    // etc.

    let scrollLeft = 0
    let scrollTop = 0
    const pos = scrollPositionsHistory[location.key]
    if (pos) {
      scrollLeft = pos.scrollLeft
      scrollTop = pos.scrollTop
    } else if (location.hash) {
      const targetHash = location.hash.substr(1)
      if (targetHash) {
        const target = document.getElementById(targetHash)
        if (target) {
          scrollTop = window.pageYOffset + target.getBoundingClientRect().top
        }
      }
    }

    // Restore the scroll position if it was saved into the state
    // or scroll to the given #hash anchor
    // or scroll to top of the page
    scrollTo({ scrollLeft, scrollTop })

    // Google Analytics tracking. Don't send 'pageview' event after
    // the initial rendering, as it was already sent
    if (window.ga) {
      window.ga('send', 'pageview', createPath(location))
    }
  }
}

const container = document.getElementById('app')
function render(route, location) {
  return new Promise((resolve, reject) => {
    try {
      ReactDOM.render(
        <App context={context}>{route.component}</App>,
        container,
        onRenderComplete.bind(undefined, route, location)
      )
    } catch (err) {
      reject(err)
    }
  })
}

// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body)

let currentLocation = context.history.location

// Re-render the app when window.location changes
async function onLocationChange(location) {
  // Remember the latest scroll position for the previous location
  scrollPositionsHistory[currentLocation.key] = getPageScroll()
  // Delete stored scroll position for next page if any
  if (window.history.action === 'PUSH') {
    delete scrollPositionsHistory[location.key]
  }
  currentLocation = location

  try {
    const route = await UniversalRouter.resolve(routes, {
      path: location.pathname,
      name: location.name,
      params: location.params,
      query: queryString.parse(location.search),
      store,
      redirect(to) {
        const error = new RedirectError(`Redirecting to "${to}"...`)
        error.status = 301
        error.path = to
        throw error
      },
    })

    await render(route, location)
  } catch (err) {
    if (err.status === 301) {
      context.history.replace(err.path || '/')
      return
    }
    if (process.env.NODE_ENV !== 'production') {
      throw err
    }

    // Avoid broken navigation in production mode by a full page reload on error
    console.error(err) // eslint-disable-line no-console
    window.location.href = createPath(location)
  }
}

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/mjackson/history#readme
context.history.listen(onLocationChange)
onLocationChange(currentLocation)

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  (module: any).hot.accept('./routes', () => {
    routes = require('./routes').default // eslint-disable-line global-require

    onLocationChange(currentLocation)
  })
}

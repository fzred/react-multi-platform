import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../../common/reducers'
// import createHelpers from './createHelpers'
// import createLogger from './logger'

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

export default function configureStore(initialState, extraArgument) {
  // const helpers = createHelpers(extraArgument)
  const middleware = [thunk.withExtraArgument(extraArgument)]

  let enhancer
  if (__DEV__) {
    middleware.push(createLogger({
      predicate: () => isDebuggingInChrome,
      collapsed: true,
      duration: true,
    }))
    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f
    if (isDebuggingInChrome && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension()
    }

    enhancer = compose(
      applyMiddleware(...middleware),
      devToolsExtension,
    )
  } else {
    enhancer = applyMiddleware(...middleware)
  }
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../../common/reducers', () =>
      store.replaceReducer(require('../../common/reducers').default) // eslint-disable-line global-require
    )
  }
  if (isDebuggingInChrome) {
    window.store = store
  }
  return store
}

import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'

import { isDev, isBrowser } from 'config'
import reducer from 'store/reducers'
import sagas from 'store/sagas'

import { signOutActions } from './auth/actions'

const loggerMiddleware = isDev && isBrowser ? createLogger() : () => fn => fn
export const sagaMiddleware = createSagaMiddleware()

const configureStore = (initialState, history, services = {}) => {
  const routeMiddleware = routerMiddleware(history)
  const enhancers = [
    applyMiddleware(
      sagaMiddleware,
      loggerMiddleware,
      routeMiddleware,
    ),
  ]

  const rootReducer = (state, action) => reducer(
    action.type === signOutActions.success.type ? undefined : state,
    action,
  )

  const store = createStore(rootReducer, initialState, compose(...enhancers))
  let sagaTask = sagaMiddleware.run(sagas, services)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas)
      })
    })
  }

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  return store
}

export default configureStore

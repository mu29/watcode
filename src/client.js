import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import Cookies from 'universal-cookie'

import App from 'components/App'
import { api } from 'services/api'
import * as firebase from 'services/firebase'
import configureStore from 'store/configure'

const history = createHistory()
const cookies = new Cookies()
const token = cookies.get('token')
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, history, { api, firebase })

const renderApp = () => (
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App store={ store } token={ token } />
    </ConnectedRouter>
  </Provider>
)

hydrate(
  renderApp(),
  document.getElementById('app'),
)

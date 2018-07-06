/* eslint-disable no-console, react/prop-types */
import 'babel-polyfill'
import path from 'path'
import express from 'express'
import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter, matchPath } from 'react-router-dom'
import serialize from 'serialize-javascript'
import { ServerStyleSheet } from 'styled-components'
import createHistory from 'history/createMemoryHistory'
import Cookies from 'universal-cookie'

import { port } from 'config'
import { api } from 'services/api'
import * as firebase from 'services/firebase'
import configureStore from 'store/configure'
import rootSaga from 'store/sagas'
import routes from 'routes'

import App from 'components/App'
import Html from 'components/Html'
import Error from 'components/Error'

const renderApp = ({
  token, store, context, location, sheet,
}) => sheet.collectStyles((
  <Provider store={ store }>
    <StaticRouter context={ context } location={ location }>
      <App store={ store } token={ token } />
    </StaticRouter>
  </Provider>
))

const renderHtml = ({
  initialState, sheet, children,
}) => {
  const styles = sheet.getStyleElement()
  const state = `
    window.__INITIAL_STATE__ = ${serialize(initialState)};
  `
  return (
    <Html styles={ styles } state={ state }>
      { children }
    </Html>
  )
}

const app = express()

app.use(express.static(path.resolve('static')))

app.use((req, res) => {
  const cookies = new Cookies(req.headers.cookie)
  const token = cookies.get('token')
  const matches = routes.filter(route => matchPath(req.url.replace(/\?.*/, ''), route))
  if (matches.length === 0) {
    renderToNodeStream(<Error />).pipe(res)
    return
  }

  const context = {}
  if (context.url) {
    res.redirect(context.url)
  } else {
    api.setToken(token)

    const history = createHistory(req.path)
    const store = configureStore({}, history, { api, firebase })
    const location = req.url
    const sheet = new ServerStyleSheet()

    const application = renderApp({
      token, store, context, location, sheet,
    })

    store.runSaga(rootSaga, { api }).done
      .then(() => {
        const initialState = store.getState()
        renderToNodeStream(renderHtml({
          initialState,
          sheet,
          children: application,
        })).pipe(res)
      })
      .catch((error) => {
        console.error(error)
        res.status(500).send('Internal Server Error')
      })

    const stream = renderToNodeStream(application)
    stream.on('data', () => {})
    stream.on('end', () => store.close())
  }
})

app.listen(port, (error) => {
  console.log(`위잉.. ${port} 포트에서 서버 시작!`)
  if (error) {
    console.error(error)
  }
})

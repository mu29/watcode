import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import createHistory from 'history/createBrowserHistory'

import { configure, addDecorator } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { configureViewport } from '@storybook/addon-viewport'

import { api } from 'services/api'
import * as firebase from 'services/firebase'
import configureStore from 'store/configure'
import theme from 'components/themes/basic'

const history = createHistory()
const store = configureStore({}, history, { api, firebase })
const req = require.context('../../src/components', true, /.stories.jsx?$/)

const loadStories = () => req.keys().forEach(filename => req(filename))

/* eslint-disable no-unused-expressions */
injectGlobal`
  * {
    box-sizing: border-box;
  }
`

configureViewport({
  defaultViewport: 'responsive',
})

addDecorator(withNotes)
addDecorator(story => (
  <Provider store={ store }>
    <BrowserRouter>
      <ThemeProvider theme={ theme }>{story()}</ThemeProvider>
    </BrowserRouter>
  </Provider>
))

configure(loadStories, module)

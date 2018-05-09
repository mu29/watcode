import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import createHistory from 'history/createBrowserHistory'

import '@storybook/addon-console'
import { configure, addDecorator } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { configureViewport } from '@storybook/addon-viewport'

import { api } from 'services/api'
import configureStore from 'store/configure'
import theme from 'components/themes/basic'

api.setToken('20170115010230587a4b9658dc59.25633050')

const history = createHistory()
const store = configureStore({}, history, { api })
const req = require.context('../../src/components', true, /.stories.jsx?$/)

const loadStories = () => req.keys().forEach(filename => req(filename))

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

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { authorizeActions, readBookmarksActions } from 'store/actions'
import { auth } from 'services/firebase'
import { basicTheme } from './themes'
import Router from './Router'

/* eslint-disable no-unused-expressions */
injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`

export default class App extends React.Component {
  static propTypes = {
    store: PropTypes.shape({
      dispatch: PropTypes.func,
      getState: PropTypes.func,
    }).isRequired,
  }

  componentWillMount() {
    const { store } = this.props
    auth.onAuthStateChanged((user) => {
      store.dispatch(authorizeActions.request({ user }))
      store.dispatch(readBookmarksActions.request())
    })
  }

  render() {
    const state = this.props.store.getState()
    const isLoggedIn = state.auth.user.email !== undefined
    return (
      <React.Fragment>
        <Helmet titleTemplate="watcode">
          <title>왓코드 - 오늘 볼 만화 추천해줘!</title>
          <meta charSet="UTF-8" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:site_name" content="watcode" />
        </Helmet>
        <ThemeProvider theme={ basicTheme }>
          <Router isLoggedIn={ isLoggedIn } />
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

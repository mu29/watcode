import React from 'react'
import { PropTypes } from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from 'routes'

export default class Router extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
  }

  static defaultProps = {
    isLoggedIn: false,
  }

  renderComponent = (route, isLoggedIn) => (props) => {
    if (!isLoggedIn && route.private) {
      return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }

    if (isLoggedIn && ['/login', '/'].includes(route.path)) {
      return <Redirect to="/profile" />
    }

    return <route.component { ...props } />
  }

  renderRoute = route => (
    <Route
      key={ route.path }
      path={ route.path }
      exact={ route.exact }
      render={ this.renderComponent(route, this.props.isLoggedIn) }
    />
  )

  render() {
    return (
      <Switch>
        { routes.map(route => this.renderRoute(route)) }
      </Switch>
    )
  }
}

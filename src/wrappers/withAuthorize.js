import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AuthForm } from 'components'

const withAuthorize = (Component) => {
  const WithAuthorize = ({ isLoggedIn, ...props }) => (
    isLoggedIn ? <Component { ...props } /> : <AuthForm { ...props } />
  )

  WithAuthorize.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  }

  const mapStateToProps = state => ({
    isLoggedIn: state.auth.user.email !== undefined,
  })

  return connect(mapStateToProps)(WithAuthorize)
}

export default withAuthorize

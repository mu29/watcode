import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Profile } from 'components'
import { withAuthorize } from 'wrappers'
import { signOutActions } from 'store/actions'

const ProfileContainer = props => <Profile { ...props } />

const mapStateToProps = state => ({
  user: state.auth.user,
})

const mapDispatchToProps = dispatch => ({
  onSignOut: () => dispatch(signOutActions.request()),
})

export default compose(
  withAuthorize,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer)

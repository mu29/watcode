import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { SignInForm } from 'components'
import { signInActions } from 'store/actions'
import { getIsLoading } from 'store/selectors'

const SignInFormContainer = props => <SignInForm { ...props } />

const mapStateToProps = state => ({
  isLoading: getIsLoading(state, signInActions.type),
})

const onSubmit = (data, dispatch) => dispatch(signInActions.request(data))

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'signIn',
    onSubmit,
  }),
)(SignInFormContainer)

import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { SignInForm } from 'components'
import { signInActions } from 'store/actions'
import { getIsLoading } from 'store/selectors'
import { createValidator, required, email, minLength } from 'services/validation'

const SignInFormContainer = props => <SignInForm { ...props } />

const validate = createValidator({
  email: [required, email],
  password: [required, minLength(6)],
})

const onSubmit = (data, dispatch) => dispatch(signInActions.request(data))

const mapStateToProps = state => ({
  isLoading: getIsLoading(state, signInActions.type),
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'signIn',
    onSubmit,
    validate,
  }),
)(SignInFormContainer)

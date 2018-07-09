import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { SignUpForm } from 'components'
import { signUpActions } from 'store/actions'
import { getIsLoading } from 'store/selectors'
import { createValidator, required, email, minLength } from 'services/validation'

const SignUpFormContainer = props => <SignUpForm { ...props } />

const validate = createValidator({
  email: [required, email],
  name: [required, minLength(1)],
  password: [required, minLength(6)],
})

const onSubmit = (data, dispatch) => dispatch(signUpActions.request(data))

const mapStateToProps = state => ({
  isLoading: getIsLoading(state, signUpActions.type),
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'signUp',
    onSubmit,
    validate,
  }),
)(SignUpFormContainer)

import React from 'react'
import { reduxForm } from 'redux-form'
import { RegisterForm } from 'components'
import { registerActions } from 'store/actions'
import { createValidator, required, email, minLength, maxLength } from 'services/validation'

const RegisterFormContainer = props => <RegisterForm { ...props } />

const onSubmit = (data, dispatch) => dispatch(registerActions.request(data))

const validate = createValidator({
  email: [required, email],
  password: [required, minLength(8), maxLength(20)],
  author: [required],
})

export default reduxForm({
  form: 'register',
  onSubmit,
  validate,
  touchOnBlur: false,
  touchOnChange: false,
})(RegisterFormContainer)

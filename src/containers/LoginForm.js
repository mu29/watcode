import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { LoginForm } from 'components'
import { loginActions } from 'store/actions'
import { createValidator, required, email, minLength, maxLength } from 'services/validation'

const LoginFormContainer = props => <LoginForm { ...props } />

const onSubmit = (data, dispatch, props) =>
  dispatch(loginActions.request({ ...data, redirect: props.from }))

const validate = createValidator({
  email: [required, email],
  password: [required, minLength(4), maxLength(20)],
})

const mapStateToProps = ({ router }) => ({
  from: router.location && router.location.state ?
    router.location.state.from.pathname :
    '/profile',
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'login',
    onSubmit,
    validate,
    touchOnBlur: false,
    touchOnChange: false,
  }),
)(LoginFormContainer)

import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { LoginForm } from 'components'
import { getIsLoading } from 'store/selectors'

const LoginFormContainer = props => <LoginForm { ...props } />

const onSubmit = (data, dispatch) => {}

const mapStateToProps = state => ({
  isLoading: false,
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'comment',
    onSubmit,
  }),
)(LoginFormContainer)

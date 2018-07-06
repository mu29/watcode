import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { SignInForm } from 'components'
import { getIsLoading } from 'store/selectors'

const SignInFormContainer = props => <SignInForm { ...props } />

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
)(SignInFormContainer)

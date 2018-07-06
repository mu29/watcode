import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { SignUpForm } from 'components'
import { getIsLoading } from 'store/selectors'

const SignUpFormContainer = props => <SignUpForm { ...props } />

const onSubmit = (data, dispatch) => {}

const mapStateToProps = state => ({
  isLoading: false,
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'signUp',
    onSubmit,
  }),
)(SignUpFormContainer)

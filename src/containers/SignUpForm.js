import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { SignUpForm } from 'components'
import { signUpActions } from 'store/actions'
import { getIsLoading } from 'store/selectors'

const SignUpFormContainer = props => <SignUpForm { ...props } />

const mapStateToProps = state => ({
  isLoading: getIsLoading(state, signUpActions.type),
})

const onSubmit = (data, dispatch) => dispatch(signUpActions.request(data))

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'signUp',
    onSubmit,
  }),
)(SignUpFormContainer)

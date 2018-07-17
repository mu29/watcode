import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { CommentForm } from 'components'
import { createCommentActions } from 'store/actions'
import { getIsLoading } from 'store/selectors'

const CommentFormContainer = props => <CommentForm { ...props } />

const onSubmit = (data, dispatch, { id, author, email }) => {
  if (!data.content || data.content.length === 0) {
    return
  }

  dispatch(createCommentActions.request({
    id, author, email, ...data,
  }))
}

const mapStateToProps = state => ({
  email: state.auth.user.email,
  author: state.auth.user.displayName,
  isLoading: getIsLoading(state, createCommentActions.type),
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'comment',
    onSubmit,
  }),
)(CommentFormContainer)

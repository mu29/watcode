import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { BookmarkForm } from 'components'
import { createBookmarksActions } from 'store/actions'
import { getIsLoading } from 'store/selectors'

const BookmarkFormContainer = props => <BookmarkForm { ...props } />

const onSubmit = (data, dispatch, { email }) => {
  if (!data.content || data.content.length === 0) {
    return
  }

  const ids = data.content.match(/\d+/g) || []
  dispatch(createBookmarksActions.request({ email, ids }))
}

const mapStateToProps = state => ({
  email: state.auth.user.email,
  isLoading: getIsLoading(state, createBookmarksActions.type),
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'bookmark',
    onSubmit,
  }),
)(BookmarkFormContainer)

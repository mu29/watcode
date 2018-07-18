import React from 'react'
import { connect } from 'react-redux'
import { ArtworkImage } from 'components'
import { createBookmarkActions, deleteBookmarkActions } from 'store/actions'
import { getIsLoading } from 'store/selectors'

const ArtworkImageContainer = props => <ArtworkImage { ...props } />

const mapStateToProps = (state, { id }) => ({
  email: state.auth.user.email,
  isBookmarked: state.bookmark.bookmarks.find(b => b === id) !== undefined,
  isLoading: getIsLoading(state, createBookmarkActions.type)
    || getIsLoading(state, deleteBookmarkActions.type),
})

const mapDispatchToProps = (dispatch, { id }) => ({
  createBookmark: email => dispatch(createBookmarkActions.request({ id, email })),
  deleteBookmark: () => dispatch(deleteBookmarkActions.request({ id })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkImageContainer)

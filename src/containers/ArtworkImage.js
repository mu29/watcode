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

const mapDispatchToProps = (dispatch, { id, email, isBookmarked }) => ({
  toggleBookmark: () => dispatch(isBookmarked ?
    deleteBookmarkActions.request({ id }) :
    createBookmarkActions.request({ id, email })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkImageContainer)

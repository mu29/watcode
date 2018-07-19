import React from 'react'
import { connect } from 'react-redux'
import { ArtworkList } from 'components'
import { withPaginate } from 'wrappers'
import { readBookmarksActions } from 'store/actions'
import { getBookmarks, getIsLoading } from 'store/selectors'

const PaginableArtworkList = withPaginate()(props => <ArtworkList { ...props } />)

const BookmarkListContainer = props => <PaginableArtworkList { ...props } />

const mapStateToProps = state => ({
  list: getBookmarks(state),
  isLoading: getIsLoading(state, readBookmarksActions.type),
  onPaginate: () => {},
})

export default connect(mapStateToProps)(BookmarkListContainer)

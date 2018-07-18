import React from 'react'
import { connect } from 'react-redux'
import { ArtworkList } from 'components'
import { getBookmarks } from 'store/selectors'

const BookmarkListContainer = props => <ArtworkList { ...props } />

const mapStateToProps = state => ({
  list: getBookmarks(state),
})

export default connect(mapStateToProps)(BookmarkListContainer)

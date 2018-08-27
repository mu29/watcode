import React from 'react'
import { connect } from 'react-redux'
import { ArtworkReactions } from 'components'

const ArtworkReactionsContainer = props => <ArtworkReactions { ...props } />

const mapStateToProps = ({ auth, bookmark }, { id }) => ({
  isAdmin: auth.isAdmin,
  isBookmarked: bookmark.bookmarks.find(b => b === id) !== undefined,
})

export default connect(mapStateToProps)(ArtworkReactionsContainer)

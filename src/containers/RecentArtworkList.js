import React from 'react'
import { connect } from 'react-redux'
import { ArtworkList } from 'components'
import { withPaginate } from 'wrappers'
import { readArtworksActions } from 'store/actions'
import { getRecentArtworks, getIsLoading } from 'store/selectors'

const PaginableArtworkList = withPaginate()(props => <ArtworkList { ...props } />)

const ArtworkListContainer = props => <PaginableArtworkList { ...props } />

const mapStateToProps = state => ({
  list: getRecentArtworks(state),
  cursor: state.artwork.recent.cursor,
  isLoading: getIsLoading(state, readArtworksActions.type),
})

const mapDispatchToProps = dispatch => ({
  onPaginate: cursor => dispatch(readArtworksActions.request({ cursor })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkListContainer)

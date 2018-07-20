import React from 'react'
import { connect } from 'react-redux'
import { ArtworkList } from 'components'
import { withPaginate } from 'wrappers'
import { searchArtworksActions } from 'store/actions'
import { getSearchArtworks, getIsLoading } from 'store/selectors'

const PaginableArtworkList = withPaginate()(props => <ArtworkList { ...props } />)

const ArtworkListContainer = props => <PaginableArtworkList { ...props } />

const mapStateToProps = state => ({
  list: getSearchArtworks(state),
  cursor: state.artwork.search.cursor,
  isLoading: getIsLoading(state, searchArtworksActions.type),
})

const mapDispatchToProps = (dispatch, { type, query }) => ({
  onPaginate: cursor => dispatch(searchArtworksActions.request({ type, query, cursor })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkListContainer)

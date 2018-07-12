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
  isLoading: getIsLoading(state, readArtworksActions.type),
})

const mapDispatchToProps = dispatch => ({
  onPaginate: page => dispatch(readArtworksActions.request({ page })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkListContainer)

import React from 'react'
import { connect } from 'react-redux'
import { ArtworkList } from 'components'
import { withPaginate } from 'wrappers'
import { readPopularArtworksActions } from 'store/actions'
import { getMonthlyArtworks, getIsLoading } from 'store/selectors'

const PaginableArtworkList = withPaginate()(props => <ArtworkList { ...props } />)

const ArtworkListContainer = props => <PaginableArtworkList { ...props } />

const mapStateToProps = state => ({
  list: getMonthlyArtworks(state),
  cursor: state.artwork.monthly.cursor,
  isLoading: getIsLoading(state, readPopularArtworksActions.type),
})

const mapDispatchToProps = dispatch => ({
  onPaginate: cursor => dispatch(readPopularArtworksActions.request({ cursor, period: 'monthly' })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkListContainer)

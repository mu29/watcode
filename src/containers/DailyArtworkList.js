import React from 'react'
import { connect } from 'react-redux'
import { ArtworkList } from 'components'
import { withPaginate } from 'wrappers'
import { readPopularArtworksActions } from 'store/actions'
import { getDailyArtworks, getIsLoading } from 'store/selectors'

const PaginableArtworkList = withPaginate()(props => <ArtworkList { ...props } />)

const ArtworkListContainer = props => <PaginableArtworkList { ...props } />

const mapStateToProps = state => ({
  list: getDailyArtworks(state),
  cursor: state.artwork.daily.cursor,
  isLoading: getIsLoading(state, readPopularArtworksActions.type),
})

const mapDispatchToProps = dispatch => ({
  onPaginate: cursor => dispatch(readPopularArtworksActions.request({ cursor, period: 'daily' })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkListContainer)

import React from 'react'
import { connect } from 'react-redux'
import { ArtworkList } from 'components'
import { withPaginate } from 'wrappers'
import { readPopularArtworksActions } from 'store/actions'
import { getWeeklyArtworks, getIsLoading } from 'store/selectors'

const PaginableArtworkList = withPaginate()(props => <ArtworkList { ...props } />)

const ArtworkListContainer = props => <PaginableArtworkList { ...props } />

const mapStateToProps = state => ({
  list: getWeeklyArtworks(state),
  isLoading: getIsLoading(state, readPopularArtworksActions.type),
})

const mapDispatchToProps = dispatch => ({
  onPaginate: page => dispatch(readPopularArtworksActions.request({ page, period: 'weekly' })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkListContainer)

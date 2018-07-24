import React from 'react'
import { connect } from 'react-redux'
import { ArtworkList } from 'components'
import { withPaginate } from 'wrappers'
import { readRecommendationsActions } from 'store/actions'
import { getRecommendations, getIsLoading } from 'store/selectors'

const PaginableArtworkList = withPaginate()(props => <ArtworkList { ...props } />)

const BookmarkListContainer = props => <PaginableArtworkList { ...props } />

const mapStateToProps = state => ({
  list: getRecommendations(state),
  isLoading: getIsLoading(state, readRecommendationsActions.type),
})

const mapDispatchToProps = dispatch => ({
  onPaginate: () => dispatch(readRecommendationsActions.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkListContainer)

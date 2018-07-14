import React from 'react'
import { connect } from 'react-redux'
import { ArtworkView } from 'components'
import { readArtworkActions } from 'store/actions'
import { getArtwork, getIsLoading } from 'store/selectors'

const ArtworkViewContainer = props => <ArtworkView { ...props } />

const mapStateToProps = (state, props) => ({
  artwork: getArtwork(state, props),
  isLoading: getIsLoading(state, readArtworkActions.type),
})

const mapDispatchToProps = dispatch => ({
  readArtwork: id => dispatch(readArtworkActions.request({ id })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkViewContainer)

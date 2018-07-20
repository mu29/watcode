import React from 'react'
import { connect } from 'react-redux'
import { SearchBar } from 'components'
import { prepareSearchActions } from 'store/actions'

const SearchBarContainer = props => <SearchBar { ...props } />

const mapStateToProps = state => ({
  query: state.artwork.search.query,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: query => dispatch(prepareSearchActions.request({ query })),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer)

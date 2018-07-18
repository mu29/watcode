import React from 'react'
import { push } from 'react-router-redux'
import { reduxForm } from 'redux-form'
import { SearchBar } from 'components'

const SearchBarContainer = props => <SearchBar { ...props } />

const onSubmit = (data, dispatch) => dispatch(push(`/search?query=${data.query}`))

export default reduxForm({
  form: 'search',
  onSubmit,
})(SearchBarContainer)

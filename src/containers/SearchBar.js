import React from 'react'
import { reduxForm } from 'redux-form'
import { SearchBar } from 'components'

const SearchBarContainer = props => <SearchBar { ...props } />

const onSubmit = (data, dispatch) => {}

export default reduxForm({
  form: 'search',
  onSubmit,
})(SearchBarContainer)

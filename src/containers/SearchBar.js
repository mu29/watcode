import React from 'react'
import { reduxForm } from 'redux-form'
import { SearchBar } from 'components'
import { createValidator, required, minLength } from 'services/validation'

const SearchBarContainer = props => <SearchBar { ...props } />

const onSubmit = (data, dispatch) => {}

const validate = createValidator({
  query: [required, minLength(0)],
})

export default reduxForm({
  form: 'search',
  onSubmit,
  validate,
})(SearchBarContainer)

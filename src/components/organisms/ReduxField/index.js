import React from 'react'
import { PropTypes } from 'prop-types'
import { Field } from 'components'

const ReduxField = ({
  input, meta, ...props
}) => {
  const fieldProps = {
    ...input,
    ...meta,
    ...props,
    error: meta.touched && meta.error ? meta.error : '',
  }

  return (
    <Field { ...fieldProps } />
  )
}

ReduxField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
}

export default ReduxField

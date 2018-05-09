import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Label, Input } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 0;
  border-radius: 0.375rem;
  transition: border-color 0.3s;
`

const LabelArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;
`

const Error = styled.span`
  display: flex;
  color: ${palette('red.default')};
  font-size: 0.75rem;
`

const InputField = ({
  type, name, label, error, ...props
}) => {
  const inputProps = {
    id: name,
    name,
    type,
    ...props,
  }

  return (
    <Wrapper error={ error } { ...props }>
      <LabelArea>
        { label && <Label htmlFor={ inputProps.id }>{ label }</Label> }
        { error && <Error>{ error }</Error> }
      </LabelArea>
      <Input { ...inputProps } error={ error } />
    </Wrapper>
  )
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
}

InputField.defaultProps = {
  type: 'text',
  label: undefined,
  error: undefined,
  touched: false,
}

export default InputField

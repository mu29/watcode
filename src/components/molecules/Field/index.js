import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Label, Input } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const LabelArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  padding: 0.25rem;
`

const Error = styled.span`
  display: flex;
  align-items: center;
  color: ${palette('red.default')};
  font-size: 0.75rem;
`

const Field = ({
  type, name, label, error, ...props
}) => {
  const inputProps = {
    id: name,
    name,
    type,
    ...props,
  }

  return (
    <Wrapper error={ error }>
      {
        (label || error) &&
        <LabelArea>
          { label && <Label htmlFor={ inputProps.id }>{ label }</Label> }
          { error && <Error>{ error }</Error> }
        </LabelArea>
      }
      <Input { ...inputProps } error={ error } />
    </Wrapper>
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  className: PropTypes.string,
}

Field.defaultProps = {
  type: 'text',
  label: undefined,
  error: undefined,
  touched: false,
  className: undefined,
}

export default Field

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { width, border, color, primaryColor, fontFamily, fontSize, palette } from 'services/style'

const errorColor = ({ error, theme }) => error && `1px solid ${palette('red.default')({ theme })}`

const styles = css`
  width: ${width};
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  border: ${border};
  border-radius: 0.0625rem;
  background: ${palette('white.default')};
  padding: 0.5rem;
  transition: border 0.3s;
  resize: none;

  &:hover {
    outline: none;
  }

  &:active, &:focus {
    outline: none;
    border: 0.0625rem solid ${primaryColor};
  }

  &::placeholder {
    filter: opacity(50%);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`

const StyledInput = styled.input`
  ${styles}
  border: ${errorColor};

  &:active, &:focus {
    border: ${errorColor};
  }
`
const StyledTextArea = styled.textarea`${styles}`

const Input = (props) => {
  switch (props.type) {
    case 'textarea':
      return <StyledTextArea innerRef={ props.inputRef } { ...props } />
    default:
      return <StyledInput innerRef={ props.inputRef } { ...props } />
  }
}

Input.propTypes = {
  type: PropTypes.string,
  inputRef: PropTypes.shape({}),
  width: PropTypes.number,
  border: PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  primaryColor: PropTypes.string,
  font: PropTypes.string,
  fontSize: PropTypes.number,
}

Input.defaultProps = {
  type: 'text',
  inputRef: undefined,
  width: undefined,
  border: 'gray.40',
  block: false,
  font: 'default',
  fontSize: 14,
  color: 'gray.90',
  primaryColor: 'yellow.default',
}

export default Input

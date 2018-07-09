import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import {
  width,
  height,
  padding,
  fontFamily,
  fontSize,
  color,
  primaryColor,
  backgroundColor,
  border,
  borderRadius,
} from 'services/style'

const styles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${width};
  height: ${height};
  padding: ${padding};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${color};
  background-color: ${backgroundColor};
  border: ${border};
  border-radius: ${borderRadius};
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;

  &:hover {
    color: ${primaryColor};
  }

  &:active, &:focus, &:hover {
    outline: none;
  }
`

/* eslint-disable no-shadow */
const StyledLink = styled(({
  to, ...props
}) => <Link to={ to } { ...props } />)`${styles}`

const Anchor = styled.a`${styles}`

const StyledButton = styled.button`${styles}`

const Button = ({
  to, href, ...props
}) => {
  if (to) {
    return <StyledLink to={ to } { ...props } />
  } else if (href) {
    return <Anchor href={ href } { ...props } />
  }
  return <StyledButton { ...props } />
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  font: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  primaryColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.number,
}

Button.defaultProps = {
  to: undefined,
  href: undefined,
  type: 'button',
  width: undefined,
  height: 48,
  padding: '0 24',
  font: 'default',
  fontSize: 16,
  color: 'white.default',
  primaryColor: 'yellow.default',
  backgroundColor: 'gray.90',
  border: undefined,
  borderRadius: 1,
}

export default Button

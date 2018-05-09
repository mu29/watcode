import React from 'react'
import { PropTypes } from 'prop-types'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { color, fontFamily, fontSize } from 'services/style'

const styles = css`
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: bold;
`

const Anchor = styled.a`${styles}`

const StyledLink = styled(NavLink)`${styles}`

const Link = props => (props.href ? <Anchor { ...props } /> : <StyledLink { ...props } />)

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.string,
  fontSize: PropTypes.number,
}

Link.defaultProps = {
  to: undefined,
  href: undefined,
  color: 'gray.90',
  font: 'gothic',
  fontSize: 14,
}

export default Link

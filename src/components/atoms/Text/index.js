import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, fontFamily, fontSize, fontWeight } from 'services/style'

const NormalText = styled.span`
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
`

const SmallText = styled.small`
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
`

const Text = ({ small, ...props }) =>
  (small ? <SmallText { ...props } /> : <NormalText { ...props } />)

Text.propTypes = {
  color: PropTypes.string,
  font: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  small: PropTypes.bool,
}

Text.defaultProps = {
  color: 'gray.90',
  font: 'default',
  fontSize: 14,
  fontWeight: 400,
  small: false,
}

export default Text

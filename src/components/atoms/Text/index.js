import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, fontFamily, fontSize } from 'services/style'

const NormalText = styled.span`
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${fontSize};
`

const SmallText = styled.small`
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${fontSize};
`

const Text = ({ small, ...props }) =>
  (small ? <SmallText { ...props } /> : <NormalText { ...props } />)

Text.propTypes = {
  color: PropTypes.string,
  font: PropTypes.string,
  fontSize: PropTypes.number,
  small: PropTypes.bool,
}

Text.defaultProps = {
  color: 'gray.90',
  font: 'default',
  fontSize: 14,
  small: false,
}

export default Text

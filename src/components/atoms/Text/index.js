import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { color, fontFamily, fontSize, fontWeight } from 'services/style'

const styles = css`
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: 1;
`

const NormalText = styled.span`${styles}`

const SmallText = styled.small`${styles}`

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

import React from 'react'
import { PropTypes } from 'prop-types'
import styled, { css } from 'styled-components'
import {
  fontWeight,
  fontFamily,
  fontSize as getFontSize,
  color,
} from 'services/style'

export const calculateFontSize = ({ level, fontSize }) =>
  (fontSize ? getFontSize : `${(16 + (Math.floor((2 ** (6 - level)) / 2) * 2)) / 16}rem`)

const styles = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeight};
  font-size: ${calculateFontSize};
  color: ${color};
  margin: 0;
`

const Heading = styled(({
  level, ...props
}) => React.createElement(`h${level}`, props))`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  font: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
}

Heading.defaultProps = {
  level: 1,
  font: 'myeongjo',
  fontSize: undefined,
  fontWeight: 600,
}

export default Heading

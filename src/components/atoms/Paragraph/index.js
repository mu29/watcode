import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { color, fontFamily, fontSize } from 'services/style'
import { nl2br } from 'services/utils'

const styles = css`
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  line-height: 1.4;
`

const Paragraph = styled(({
  children, ...props
}) => React.createElement('p', props, nl2br(children)))`${styles}`

Paragraph.propTypes = {
  color: PropTypes.string,
  font: PropTypes.string,
  fontSize: PropTypes.number,
}

Paragraph.defaultProps = {
  color: 'gray.90',
  font: 'default',
  fontSize: 16,
}

export default Paragraph

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, fontFamily, fontSize } from 'services/style'

const Text = styled.span`
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${fontSize};
`

Text.propTypes = {
  color: PropTypes.string,
  font: PropTypes.string,
  fontSize: PropTypes.number,
}

Text.defaultProps = {
  color: 'gray.90',
  font: 'default',
  fontSize: 14,
}

export default Text

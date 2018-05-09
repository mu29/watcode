import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { color, fontFamily, fontSize } from 'services/style'

const Label = styled.label`
  margin-bottom: 0.375rem;
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: bold;
`

Label.propTypes = {
  color: PropTypes.string,
  font: PropTypes.string,
  fontSize: PropTypes.number,
}

Label.defaultProps = {
  color: 'gray.90',
  font: 'default',
  fontSize: 12,
}

export default Label

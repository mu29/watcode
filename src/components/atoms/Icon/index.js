import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, size } from 'services/style'

const Wrapper = styled.div`
  color: ${color};
  font-size: ${size};
`

const Icon = ({ icon, type, ...props }) => (
  <Wrapper { ...props }>
    <i className={ `fa${type.substring(0, 1)} fa-${icon}` } />
  </Wrapper>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['regular', 'solid']),
  size: PropTypes.number,
  color: PropTypes.string,
}

Icon.defaultProps = {
  type: 'solid',
  size: 16,
  color: 'gray.90',
}

export default Icon

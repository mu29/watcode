import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { color, size } from 'services/style'

const Wrapper = styled.div`
  display: contents;
  color: ${color};
  font-size: ${size};
`

const Icon = ({ icon, ...props }) => (
  <Wrapper { ...props }>
    <i className={ `fas fa-${icon}` } />
  </Wrapper>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
}

Icon.defaultProps = {
  size: 16,
  color: 'gray.90',
}

export default Icon

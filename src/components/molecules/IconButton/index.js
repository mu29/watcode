import React from 'react'
import { PropTypes } from 'prop-types'
import { Button } from 'components'

const IconButton = ({ icon, children, ...props }) => (
  <Button { ...props }>
    <i className={ `fas fa-${icon}` } />
    { children }
  </Button>
)

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node,
  size: PropTypes.number,
}

IconButton.defaultProps = {
  children: undefined,
  size: 16,
}

export default IconButton

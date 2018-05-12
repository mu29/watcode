import React from 'react'
import { PropTypes } from 'prop-types'
import { Button } from 'components'

const IconButton = ({ icon, ...props }) => (
  <Button { ...props }>
    <i className={ `fas fa-${icon}` } />
  </Button>
)

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
}

IconButton.defaultProps = {
  size: 16,
}

export default IconButton

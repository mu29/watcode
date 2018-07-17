import React from 'react'
import PropTypes from 'prop-types'
import { Button, Loading } from 'components'

const LoadingButton = ({
  isLoading,
  loadingColor,
  loadingSize,
  children,
  ...props
}) => (
  <Button { ...props }>
    { isLoading ? <Loading color={ loadingColor } size={ loadingSize } /> : children }
  </Button>
)

LoadingButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadingColor: PropTypes.string,
  loadingSize: PropTypes.number,
  children: PropTypes.node.isRequired,
}

LoadingButton.defaultProps = {
  loadingColor: 'white',
  loadingSize: 16,
}

export default LoadingButton

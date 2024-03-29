import React from 'react'
import PropTypes from 'prop-types'

module.exports = new Proxy({}, {
  get: (target, property) => {
    const Mock = props => <span componentname={ property }>{props.children}</span>

    Mock.displayName = property
    Mock.propTypes = {
      children: PropTypes.any,
    }

    return Mock
  },
})

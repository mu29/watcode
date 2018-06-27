import React from 'react'
import PropTypes from 'prop-types'
import { ArtworkItem } from 'components'

const ArtworkList = ({ list }) => list.map(item => (
  <ArtworkItem key={ item.code } artwork={ item } />
))

ArtworkList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default ArtworkList

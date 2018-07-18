import React from 'react'
import PropTypes from 'prop-types'
import { ArtworkItem } from 'components'

const ArtworkList = ({ list }) => list.filter(Boolean).map(item => (
  <ArtworkItem artwork={ item } key={ item.id } />
))

ArtworkList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default ArtworkList

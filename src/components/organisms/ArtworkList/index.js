import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, ArtworkItem } from 'components'
import { palette } from 'services/style'

const StyledArtworkItem = styled(ArtworkItem)`
  &:hover {
    cursor: pointer;
    background-color: ${palette('gray.10')};
  }
`

const ArtworkList = ({ list }) => list.map(item => (
  <Link to={ `/artworks/${item.code}` } key={ item.code }>
    <StyledArtworkItem artwork={ item } />
  </Link>
))

ArtworkList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default ArtworkList

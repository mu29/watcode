import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ArtworkItem } from 'components'

const Wrapper = styled.div``

const ArtworkList = ({ list }) => (
  <Wrapper>
    { list.map(item => (<ArtworkItem key={ item.code } artwork={ item } />)) }
  </Wrapper>
)

ArtworkList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default ArtworkList

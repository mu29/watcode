import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ArtworkItem } from 'components'
import { CommentList } from 'containers'
import { palette } from 'services/style'

const Wrapper = styled.div`
  margin: 1rem 0;
  border: 0.0625rem solid ${palette('gray.40')};
  background-color: ${palette('white.default')};

  @media(max-width: 768px) {
    margin: 0;
    border: none;
  }
`

const ArtworkView = ({
  artwork,
  ...props
}) => (
  <Wrapper { ...props }>
    <ArtworkItem artwork={ artwork } />
    <CommentList />
  </Wrapper>
)

ArtworkView.propTypes = {
  artwork: PropTypes.shape({
    id: PropTypes.number,
    artist: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.array,
    imageUrl: PropTypes.string,
  }).isRequired,
}

export default ArtworkView

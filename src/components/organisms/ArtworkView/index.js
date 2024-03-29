import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Loading, ArtworkItem } from 'components'
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

export default class ArtworkView extends Component {
  componentWillMount() {
    const { id, readArtwork } = this.props
    readArtwork(id)
  }

  render() {
    const { id, artwork, isLoading } = this.props
    return (
      <Wrapper { ...this.props }>
        <Loading isLoading={ isLoading && !artwork }>
          { artwork && <ArtworkItem artwork={ artwork } /> }
        </Loading>
        <CommentList id={ id } />
      </Wrapper>
    )
  }
}

ArtworkView.propTypes = {
  id: PropTypes.number.isRequired,
  artwork: PropTypes.shape({
    id: PropTypes.number,
    artist: PropTypes.array,
    title: PropTypes.string,
    tags: PropTypes.array,
    imageUrl: PropTypes.string,
  }),
  readArtwork: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

ArtworkView.defaultProps = {
  artwork: undefined,
}

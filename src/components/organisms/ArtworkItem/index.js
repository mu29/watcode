import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import uniq from 'lodash/uniq'
import { Link, Heading, Tag, Text } from 'components'
import { ArtworkImage, ArtworkReactions } from 'containers'
import { palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  padding-bottom: 0.5rem;
  background-color: ${palette('white.default')};
  border-bottom: 0.0625rem solid ${palette('gray.30')};

  @media(max-width: 767px) {
    border-bottom: 0.0625rem solid ${palette('gray.40')};
  }
`

const ArtworkArea = styled.div`
  display: flex;
`

const InfoArea = styled.div`
  flex: 1;
  height: 6rem;
  overflow: hidden;
`

const TagArea = styled.div`
  height: 3.2rem;
  overflow: scroll;
  margin-top: 0.375rem;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`

const StyledHeading = styled(Heading)`
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ArtworkItem = ({
  artwork: {
    id,
    artist,
    title,
    type,
    tags,
    imageUrl,
    bookmarks,
    comments,
    views,
  },
  showImage,
  ...props
}) => (
  <Wrapper { ...props }>
    <ArtworkArea>
      <ArtworkImage id={ id } url={ imageUrl } />
      <InfoArea>
        <StyledLink to={ `/artworks/${id}` } key={ id }>
          <StyledHeading level={ 6 }>{ title || 'N/A' }</StyledHeading>
        </StyledLink>
        <Text color="gray.60" fontSize={ 12 } fontWeight={ 200 } small>by { artist.join(', ') }</Text>
        <TagArea>
          <Tag category>{ type }</Tag>
          { uniq(tags).map(tag => (<Tag key={ tag }>{ tag }</Tag>)) }
        </TagArea>
      </InfoArea>
    </ArtworkArea>
    <ArtworkReactions id={ id } bookmarks={ bookmarks } comments={ comments } views={ views } />
  </Wrapper>
)

ArtworkItem.propTypes = {
  artwork: PropTypes.shape({
    id: PropTypes.number,
    artist: PropTypes.array,
    title: PropTypes.string,
    tags: PropTypes.array,
    imageUrl: PropTypes.string,
  }).isRequired,
  showImage: PropTypes.bool,
}

ArtworkItem.defaultProps = {
  showImage: false,
}

export default ArtworkItem

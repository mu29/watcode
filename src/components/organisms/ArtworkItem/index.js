import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading, Tag, Text, Link, ArtworkImage, ArtworkReactions } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  padding-bottom: 0.5rem;
  background-color: ${palette('white.default')};
  border-bottom: 0.0625rem solid ${palette('gray.30')};

  &:hover {
    cursor: pointer;
    background-color: ${palette('gray.10')};
  }

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

const StyledHeading = styled(Heading)`
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ArtworkItem = ({
  artwork: {
    code,
    artist,
    title,
    type,
    tags,
    imageUrl,
    stars,
    comments,
    views,
  },
  showImage,
  ...props
}) => (
  <Wrapper { ...props }>
    <ArtworkArea>
      <ArtworkImage code={ code } url={ imageUrl } />
      <InfoArea>
        <Link to={ `/artworks/${code}` }>
          <StyledHeading level={ 6 }>{ title }</StyledHeading>
        </Link>
        <Text color="gray.60" fontSize={ 12 } fontWeight={ 200 } small>by { artist }</Text>
        <TagArea>
          <Tag type>{ type }</Tag>
          { tags.map(tag => (<Tag key={ tag }>{ tag }</Tag>)) }
        </TagArea>
      </InfoArea>
    </ArtworkArea>
    <ArtworkReactions stars={ stars } comments={ comments } views={ views } />
  </Wrapper>
)

ArtworkItem.propTypes = {
  artwork: PropTypes.shape({
    code: PropTypes.number,
    artist: PropTypes.string,
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

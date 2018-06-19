import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading, Tag, Text, Link, ArtworkImage } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${palette('white.default')};
  border-bottom: 0.0625rem solid ${palette('gray.30')};
`

const InfoArea = styled.div`
  flex: 1;
  height: 7rem;
  overflow: hidden;
`

const TagArea = styled.div`
  height: 3.5rem;
  overflow: scroll;
  margin-top: 0.3125rem;
`

const StyledHeading = styled(Heading)`
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
  },
  showImage,
  ...props
}) => (
  <Wrapper { ...props }>
    <ArtworkImage code={ code } url={ imageUrl } />
    <InfoArea>
      <Link to={ `/artworks/${code}` }>
        <StyledHeading level={ 5 }>{ title }</StyledHeading>
      </Link>
      <Text color="gray.60" fontSize={ 12 } fontWeight={ 200 } small>by { artist }</Text>
      <TagArea>
        <Tag type>{ type }</Tag>
        { tags.map(tag => (<Tag key={ tag }>{ tag }</Tag>)) }
      </TagArea>
    </InfoArea>
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

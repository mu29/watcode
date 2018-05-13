import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Heading, Text } from 'components'
import { width, height, margin, palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
  height: 5.875rem;
  padding: 1rem;
  border: 0.0625rem solid ${palette('gray.30')};
  background-color: ${palette('white.default')};
`

const HeadingArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
`

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0.375rem;
`

const Divider = styled.div`
  width: ${width};
  height: ${height};
  margin: ${margin};
  background-color: ${palette('gray.20')};
`

const TagArea = styled.div`
  display: flex;
`

const Tag = styled.div`
  height: 1.5rem;
  margin-right: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  color: ${palette('white.default')};
  background-color: ${palette('gray.90')};
  border-radius: 0.25rem;
  text-overflow: ellipsis;
`

const Image = styled.img`
  height: 5.75rem;
  margin: -1rem;
  margin-left: auto;
`

const ArtworkItem = ({
  artwork: {
    code,
    artist,
    title,
    tags,
    imageUrl,
  },
  showImage,
}) => (
  <Wrapper>
    <HeadingArea>
      <Heading level={ 2 } fontWeight={ 900 }>#{ code }</Heading>
      <Text color="gray.40" small>by { artist }</Text>
    </HeadingArea>
    <Divider width={ 1 } margin="0 16" />
    <InfoArea>
      <Heading level={ 5 } fontWeight={ 400 }>{ title }</Heading>
      <TagArea>
        { tags.map(tag => (<Tag key={ tag }>{ tag }</Tag>)) }
      </TagArea>
    </InfoArea>
    { showImage && <Image src={ imageUrl } alt="" /> }
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

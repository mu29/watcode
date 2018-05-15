import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Heading, Text } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  border: 0.0625rem solid ${palette('gray.30')};
  background-color: ${palette('white.default')};

  @media(max-width: 639px) {
    flex-direction: column;
  }
`

const HeadingArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 10rem;

  @media(max-width: 639px) {
    width: 100%;
  }
`

const InfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`

const Divider = styled.div`
  width: 0.0625rem;
  margin: 0 1rem;
  background-color: ${palette('gray.20')};

  @media(max-width: 639px) {
    width: 100%;
    height: 0.0625rem;
    margin: 1rem 0;
  }
`

const Title = styled(Heading)`
  width: 100%;
  overflow: scroll;
  white-space: nowrap;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media(max-width: 639px) {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`

const TagArea = styled.div`
  display: flex;
  width: 100%;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

const Tag = styled.div`
  margin-right: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  color: ${palette('white.default')};
  background-color: ${palette('gray.90')};
  border-radius: 0.25rem;
  white-space: nowrap;
`

const TypeTag = styled(Tag)`
  background-color: ${palette('yellow.default')};
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
    type,
    tags,
    imageUrl,
  },
  showImage,
  ...props
}) => (
  <Wrapper { ...props }>
    <HeadingArea>
      <Heading level={ 3 }>#{ code }</Heading>
      <Text color="gray.40" fontSize={ 12 } fontWeight={ 200 } small>by { artist }</Text>
    </HeadingArea>
    <Divider />
    <InfoArea>
      <Title level={ 5 } fontWeight={ 400 }>{ title }</Title>
      <TagArea>
        <TypeTag>{ type }</TypeTag>
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

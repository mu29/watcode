import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Heading, Tag, Text, IconButton } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
  width: 44rem;
  margin: 4rem 0;
  background-color: ${palette('white.default')};
`

const ImageArea = styled.div`
  position: relative;
  width: 10.5rem;
  height: 15rem;
  overflow: hidden;
  border: 0.0625rem solid ${palette('gray.40')};
`

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(0.1875rem);
`

const CodeArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
`

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 1rem;
`

const TagArea = styled.div``

const Title = styled(Heading)`
  margin-bottom: 0.25rem;
`

const StyledTag = styled(Tag)`
  margin: 0.1875rem 0.375rem 0.1875rem 0;
`

const TypeTag = styled(StyledTag)`
  font-weight: 400;
  color: ${palette('white.default')};
  background-color: ${palette('gray.90')};
`

const StyledText = styled(Text)`
  margin-left: 0.25rem;
`

const StyledIconButton = styled(IconButton)`
  margin: 1rem 0;
  color: ${palette('gray.90')};
  border-radius: 0;
  border-top: 0.0625rem solid ${palette('gray.30')};
  border-bottom: 0.0625rem solid ${palette('gray.30')};
  background-color: transparent;
`

const ArtworkView = ({
  artwork: {
    code,
    artist,
    title,
    type,
    tags,
    imageUrl,
  },
  ...props
}) => (
  <Wrapper { ...props }>
    <ImageArea>
      <Image src={ imageUrl } />
      <CodeArea>
        <Heading level={ 3 }>#{ code }</Heading>
        <Text color="gray.60" fontSize={ 12 } fontWeight={ 200 } small>by { artist }</Text>
      </CodeArea>
    </ImageArea>
    <InfoArea>
      <Title level={ 3 }>{ title }</Title>
      <TagArea>
        <TypeTag>{ type }</TypeTag>
        { tags.map(tag => (<StyledTag key={ tag }>{ tag }</StyledTag>)) }
      </TagArea>
      <StyledIconButton icon="star">
        <StyledText color={ null }>1293</StyledText>
      </StyledIconButton>
    </InfoArea>
  </Wrapper>
)

ArtworkView.propTypes = {
  artwork: PropTypes.shape({
    code: PropTypes.number,
    artist: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.array,
    imageUrl: PropTypes.string,
  }).isRequired,
}

export default ArtworkView

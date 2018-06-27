import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading, Icon, Tag, Text, Link, ArtworkImage } from 'components'
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

const ArtworkInfo = styled.div`
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

const Divider = styled.div`
  margin: 0.75rem 0 0.5rem 0;
  height: 0.0625rem;
  background-color: ${palette('gray.20')};
`

const InfoArea = styled.div`
  display: flex;
  align-items: center;
  padding: 0.125rem 0.25rem;
`

const StyledIcon = styled(Icon)`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
  font-size: 0.75rem;
  color: ${palette('gray.70')};
  line-height: 1;
`

const StyledText = styled(Text)`
  font-size: 0.6875rem;
  color: ${palette('gray.70')};
  line-height: 1.1;

  &:nth-child(odd) {
    margin-left: auto;
  }
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
    <ArtworkArea>
      <ArtworkImage code={ code } url={ imageUrl } />
      <ArtworkInfo>
        <Link to={ `/artworks/${code}` }>
          <StyledHeading level={ 6 }>{ title }</StyledHeading>
        </Link>
        <Text color="gray.60" fontSize={ 12 } fontWeight={ 200 } small>by { artist }</Text>
        <TagArea>
          <Tag type>{ type }</Tag>
          { tags.map(tag => (<Tag key={ tag }>{ tag }</Tag>)) }
        </TagArea>
      </ArtworkInfo>
    </ArtworkArea>
    <Divider />
    <InfoArea>
      <StyledIcon type="regular" icon="star" />
      <StyledText small>172</StyledText>
      <StyledText>댓글 18개 · 조회 3,281회</StyledText>
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

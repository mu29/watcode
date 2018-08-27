import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, Text, IconButton, Link } from 'components'
import { palette } from 'services/style'

const color = ({ isBookmarked, theme }) =>
  palette(isBookmarked ? 'yellow.default' : 'gray.70')({ theme })

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.625rem 0.25rem 0.125rem 0.25rem;
  border-top: 0.0625rem solid ${palette('gray.20')};
`

const StyledIcon = styled(Icon)`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
  font-size: 0.75rem;
  color: ${color};
  line-height: 1;
`

const StyledIconButton = styled(props => <IconButton { ...props } />)`
  width: 0.6rem;
  height: 0.6rem;
  margin-left: 0.25rem;
  padding: 0;
  color: ${palette('gray.70')};
  background-color: transparent;
  font-size: 0.6rem;
  line-height: 1;
`

const StyledText = styled(Text)`
  font-size: 0.6875rem;
  color: ${color};
  line-height: 1.1;
`

const StyledLink = styled(Link)`
  font-size: 0.6875rem;
  color: ${palette('gray.70')};
  line-height: 1.1;
  margin-left: auto;

  &:hover {
    color: ${palette('yellow.default')};
  }
`

const ArtworkReactions = ({
  id,
  isBookmarked,
  bookmarks,
  comments,
  views,
}) => (
  <Wrapper>
    <StyledIcon isBookmarked={ isBookmarked } type="regular" icon="star" />
    <StyledText isBookmarked={ isBookmarked } small>{ bookmarks }명</StyledText>
    <StyledLink href={ `https://hitomi.la/reader/${id}.html` }>
      { comments > 0 ? `댓글 ${comments}개 · ` : ''}조회 { views }회
    </StyledLink>
    <StyledIconButton type="solid" size={ 12 } icon="link" href={ `https://hitomi.la/reader/${id}.html` } />
  </Wrapper>
)

ArtworkReactions.propTypes = {
  id: PropTypes.number.isRequired,
  isBookmarked: PropTypes.bool,
  bookmarks: PropTypes.number,
  comments: PropTypes.number,
  views: PropTypes.number,
}

ArtworkReactions.defaultProps = {
  isBookmarked: false,
  bookmarks: 0,
  comments: 0,
  views: 0,
}

export default ArtworkReactions

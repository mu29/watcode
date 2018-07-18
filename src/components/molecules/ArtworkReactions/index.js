import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, Text } from 'components'
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

const StyledText = styled(Text)`
  font-size: 0.6875rem;
  color: ${color};
  line-height: 1.1;

  &:nth-child(odd) {
    margin-left: auto;
  }
`

const ArtworkReactions = ({
  isBookmarked,
  bookmarks,
  comments,
  views,
}) => (
  <Wrapper>
    <StyledIcon isBookmarked={ isBookmarked } type="regular" icon="star" />
    <StyledText isBookmarked={ isBookmarked } small>{ bookmarks }명</StyledText>
    <StyledText>{ comments > 0 ? `댓글 ${comments}개 · ` : ''}조회 { views }회</StyledText>
  </Wrapper>
)

ArtworkReactions.propTypes = {
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

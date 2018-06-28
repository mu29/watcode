import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, Text } from 'components'
import { palette } from 'services/style'

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

const ArtworkReactions = ({ stars, comments, views }) => (
  <Wrapper>
    <StyledIcon type="regular" icon="star" />
    <StyledText small>{ stars }명</StyledText>
    <StyledText>{ comments > 0 ? `댓글 ${comments}개 · ` : ''}조회 { views }회</StyledText>
  </Wrapper>
)

ArtworkReactions.propTypes = {
  stars: PropTypes.number,
  comments: PropTypes.number,
  views: PropTypes.number,
}

ArtworkReactions.defaultProps = {
  stars: 0,
  comments: 0,
  views: 0,
}

export default ArtworkReactions

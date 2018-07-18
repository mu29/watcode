import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CommentItem } from 'components'
import { CommentForm } from 'containers'
import { palette } from 'services/style'

const Wrapper = styled.div`
  padding: 1rem;
  background-color: ${palette('white.default')};
`

const StyledCommentItem = styled(props => <CommentItem { ...props } />)`
  margin-top: 0.75rem;
`

const CommentList = ({ id, list }) => (
  <Wrapper>
    <CommentForm id={ id } />
    { list.map(item => <StyledCommentItem key={ item.id } comment={ item } artworkId={ id } />) }
  </Wrapper>
)

CommentList.propTypes = {
  id: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CommentList

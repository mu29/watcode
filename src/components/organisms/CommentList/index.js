import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CommentItem } from 'components'
import { CommentForm } from 'containers'
import { palette } from 'services/style'

const Wrapper = styled.div`
  padding: 1rem;
  background-color: ${palette('gray.20')};
`

const StyledCommentItem = styled(CommentItem)`
  margin-top: 1rem;
`

const CommentList = ({ list }) => (
  <Wrapper>
    <CommentForm />
    { list.map(item => <StyledCommentItem key={ item.id } comment={ item } />) }
  </Wrapper>
)

CommentList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CommentList

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CommentItem } from 'components'
import { CommentForm } from 'containers'

const Wrapper = styled.div`
`

const StyledCommentItem = styled(CommentItem)`
  margin-top: 2rem;
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

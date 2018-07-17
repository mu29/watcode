import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
`

const Container = styled.div`
  padding: 0.5rem;
  border-radius: 0.75rem;
  background-color: ${palette('gray.30')};
`

const Name = styled(Text)`
  margin-right: 0.25rem;
  font-weight: 600;
  color: ${palette('gray.100')};
`

const CommentItem = ({
  comment: {
    author,
    content,
  },
  ...props
}) => (
  <Wrapper { ...props }>
    <Container>
      <Name fontSize={ 12 }>{ author }</Name>
      <Text fontSize={ 12 }>{ content }</Text>
    </Container>
  </Wrapper>
)

CommentItem.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
}

export default CommentItem

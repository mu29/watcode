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
  border-radius: 0.5rem;
  background-color: ${palette('gray.30')};
`

const Name = styled(Text)`
  margin-right: 0.25rem;
  font-weight: 600;
  color: ${palette('gray.100')};
`

const CommentItem = ({
  comment: {
    content,
    userAttributes: {
      name,
    },
  },
  ...props
}) => (
  <Wrapper { ...props }>
    <Container>
      <Name fontSize={ 12 }>{ name }</Name>
      <Text fontSize={ 12 }>{ content }</Text>
    </Container>
  </Wrapper>
)

CommentItem.propTypes = {
  comment: PropTypes.shape({
    content: PropTypes.string,
    userAttributes: PropTypes.object,
  }).isRequired,
}

export default CommentItem

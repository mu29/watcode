import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  border: 0.0625rem solid ${palette('white.default')};
  background-color: ${palette('white.default')};
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
}) => (
  <Wrapper>
    <Name>{ name }</Name>
    <Text>{ content }</Text>
  </Wrapper>
)

CommentItem.propTypes = {
  comment: PropTypes.shape({
    content: PropTypes.string,
    userAttributes: PropTypes.object,
  }).isRequired,
}

export default CommentItem

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Loading, IconButton } from 'components'
import { palette } from 'services/style'

const StyledIconButton = styled(IconButton)`
  height: 2.1875rem;
  margin: auto 0.25rem;
  padding: 0;
  color: ${palette('gray.40')};
  background-color: ${palette('transparent.default')};
`

const CommentTooltip = ({ isLoading, deleteComment, ...props }) => (
  <Loading isLoading={ isLoading } size={ 16 } color="gray.40" compact inline>
    <StyledIconButton icon="minus-circle" onClick={ deleteComment } { ...props } />
  </Loading>
)

CommentTooltip.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  deleteComment: PropTypes.func.isRequired,
}

export default CommentTooltip

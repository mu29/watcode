import React from 'react'
import { connect } from 'react-redux'
import { CommentTooltip } from 'components'
import { deleteCommentActions } from 'store/actions'
import { getIsLoading } from 'store/selectors'

const CommentTooltipContainer = props => <CommentTooltip { ...props } />

const mapStateToProps = (state, { id }) => ({
  isLoading: getIsLoading(state, deleteCommentActions.type, 'id', id),
})

const mapDispatchToProps = (dispatch, { artworkId, id }) => ({
  deleteComment: () => dispatch(deleteCommentActions.request({ artworkId, id })),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentTooltipContainer)

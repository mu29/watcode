import React from 'react'
import { connect } from 'react-redux'
import { CommentList } from 'components'
import { withPaginate } from 'wrappers'
import { readCommentsActions } from 'store/actions'
import { getArtworkComments, getIsLoading } from 'store/selectors'

const PaginableCommentList = withPaginate()(props => <CommentList { ...props } />)

const CommentListContainer = props => <PaginableCommentList { ...props } />

const mapStateToProps = (state, props) => ({
  list: getArtworkComments(state, props),
  isLoading: getIsLoading(state, readCommentsActions.type),
})

const mapDispatchToProps = (dispatch, { id }) => ({
  onPaginate: () => dispatch(readCommentsActions.request({ id })),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)

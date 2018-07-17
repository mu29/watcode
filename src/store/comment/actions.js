import { actionCreatorFactory } from '../common'
import { commentSchema } from '../schemas'

const factory = actionCreatorFactory('Comment')

export const createCommentActions = factory.async('CREATE_COMMENT', { schema: commentSchema })
export const readCommentsActions = factory.async('READ_COMMENTS', { schema: commentSchema })
export const deleteCommentActions = factory.async('DELETE_COMMENT')

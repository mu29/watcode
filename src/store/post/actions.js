import { actionCreatorFactory } from 'store/common'
import { postSchema } from '../schemas'

const factory = actionCreatorFactory('Post')

export const readMyPostListActions = factory.async('READ_MY_POST_LIST', { schema: postSchema })

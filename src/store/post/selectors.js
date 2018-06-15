import { denormalize } from 'normalizr'
import { createSelector } from 'reselect'
import { getEntity } from '../entity/selectors'
import { postSchema } from '../schemas'

export const initialState = {
  myPostIds: [],
}

export const getPostList = state => getEntity(state).posts
export const getMyPostIds = state => state.post.myPostIds

export const getMyPostList = createSelector(
  [getEntity, getMyPostIds],
  (entities, ids) => denormalize(ids, [postSchema], entities),
)

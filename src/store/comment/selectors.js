import { denormalize } from 'normalizr'
import { createSelector } from 'reselect'
import { getEntity } from '../entity/selectors'
import { commentSchema } from '../schemas'

export const initialState = {
}

export const getComments = state => getEntity(state).comments

export const getArtworkComments = createSelector(
  [getEntity, (state, props) => state.comment[props.id] || []],
  (entities, ids) => denormalize(ids, [commentSchema], entities),
)

import { denormalize } from 'normalizr'
import { createSelector } from 'reselect'
import { getEntity } from '../entity/selectors'
import { userSchema } from '../schemas'

export const initialState = {
  user: {},
}

export const getUserList = state => getEntity(state).users
export const getMeId = state => state.auth.user.id

export const getMe = createSelector(
  [getEntity, getMeId],
  (entities, id) => denormalize(id, userSchema, entities),
)

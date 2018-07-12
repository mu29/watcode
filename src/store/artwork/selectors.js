import { denormalize } from 'normalizr'
import { createSelector } from 'reselect'
import { getEntity } from '../entity/selectors'
import { artworkSchema } from '../schemas'

export const initialState = {
  recent: [],
  daily: [],
  weekly: [],
  monthly: [],
}

export const getArtworks = state => getEntity(state).artworks
export const getRecentIds = state => state.artwork.recent
export const getDailyIds = state => state.artwork.daily
export const getWeeklyIds = state => state.artwork.weekly
export const getMonthlyIds = state => state.artwork.monthly

export const getRecentArtworks = createSelector(
  [getEntity, getRecentIds],
  (entities, ids) => denormalize(ids, [artworkSchema], entities),
)

export const getDailyArtworks = createSelector(
  [getEntity, getDailyIds],
  (entities, ids) => denormalize(ids, [artworkSchema], entities),
)

export const getWeeklyArtworks = createSelector(
  [getEntity, getWeeklyIds],
  (entities, ids) => denormalize(ids, [artworkSchema], entities),
)

export const getMonthlyArtworks = createSelector(
  [getEntity, getMonthlyIds],
  (entities, ids) => denormalize(ids, [artworkSchema], entities),
)

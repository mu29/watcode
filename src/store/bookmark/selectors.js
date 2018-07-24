import { denormalize } from 'normalizr'
import { createSelector } from 'reselect'
import { getEntity } from '../entity/selectors'
import { artworkSchema } from '../schemas'

export const initialState = {
  bookmarks: [],
  recommendations: [],
}

export const getBookmarkIds = state => state.bookmark.bookmarks
export const getRecommendationsIds = state => state.bookmark.recommendations

export const getBookmarks = createSelector(
  [getEntity, getBookmarkIds],
  (entities, ids) => denormalize(ids, [artworkSchema], entities),
)

export const getRecommendations = createSelector(
  [getEntity, getRecommendationsIds],
  (entities, ids) => denormalize(ids, [artworkSchema], entities),
)

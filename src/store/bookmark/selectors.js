import { denormalize } from 'normalizr'
import { createSelector } from 'reselect'
import { getEntity } from '../entity/selectors'
import { bookmarkSchema } from '../schemas'

export const initialState = {
  bookmarks: [],
}

export const getBookmarkIds = state => state.bookmark.bookmarks

export const getBookmarks = createSelector(
  [getEntity, getBookmarkIds],
  (entities, ids) => denormalize(ids, [bookmarkSchema], entities),
)

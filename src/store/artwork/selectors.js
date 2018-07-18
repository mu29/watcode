import { denormalize } from 'normalizr'
import { createSelector } from 'reselect'
import { getEntity } from '../entity/selectors'
import { artworkSchema } from '../schemas'

export const initialState = {
  recent: {
    artworks: [],
    cursor: null,
  },
  daily: {
    artworks: [],
    cursor: null,
  },
  weekly: {
    artworks: [],
    cursor: null,
  },
  monthly: {
    artworks: [],
    cursor: null,
  },
  search: {
    id: {
      artworks: [],
      cursor: null,
    },
    title: {
      artworks: [],
      cursor: null,
    },
    artist: {
      artworks: [],
      cursor: null,
    },
    tags: {
      artworks: [],
      cursor: null,
    },
    query: '',
  },
}

export const getArtworks = state => getEntity(state).artworks
export const getRecentIds = state => state.artwork.recent.artworks
export const getDailyIds = state => state.artwork.daily.artworks
export const getWeeklyIds = state => state.artwork.weekly.artworks
export const getMonthlyIds = state => state.artwork.monthly.artworks
export const getSearchIds = (state, props) => state.artwork.search[props.type].artworks

export const getArtwork = createSelector(
  [getEntity, (_, props) => props.id],
  (entities, id) => denormalize(id, artworkSchema, entities),
)

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

export const getSearchArtworks = createSelector(
  [getEntity, getSearchIds],
  (entities, ids) => denormalize(ids, [artworkSchema], entities),
)

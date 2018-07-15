import uniq from 'lodash/uniq'
import { initialState } from './selectors'
import {
  readArtworksActions,
  readPopularArtworksActions,
} from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case readArtworksActions.success.type:
      return {
        ...state,
        recent: {
          artworks: uniq([...state.recent.artworks, ...action.payload.map(a => a.id)]),
          cursor: action.meta.cursor,
        },
      }
    case readPopularArtworksActions.success.type: {
      const { period } = action.meta.params
      return {
        ...state,
        [period]: {
          artworks: uniq([...state[period].artworks, ...action.payload.map(a => a.id)]),
          cursor: action.meta.cursor,
        },
      }
    }
    default:
      return state
  }
}

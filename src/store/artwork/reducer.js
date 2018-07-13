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
        recent: uniq([...state.recent, ...action.payload.map(a => a.id)]),
      }
    case readPopularArtworksActions.success.type: {
      const { period } = action.meta.params
      return {
        ...state,
        [period]: uniq([...state[period], ...action.payload.map(a => a.id)]),
      }
    }
    default:
      return state
  }
}

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
        recent: uniq([...state.recent, ...action.payload.map(a => a.code)]),
      }
    case readPopularArtworksActions.success.type: {
      const { period } = action.payload.params
      return {
        ...state,
        [period]: uniq([...state[period], action.payload.map(a => a.code)]),
      }
    }
    default:
      return state
  }
}

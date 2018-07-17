import uniq from 'lodash/uniq'
import { initialState } from './selectors'
import {
  createCommentActions,
  readCommentsActions,
  deleteCommentActions,
} from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case createCommentActions.success.type: {
      const { id } = action.meta.params
      return {
        ...state,
        [id]: [...(state[id] || []), action.payload.id],
      }
    }
    case readCommentsActions.success.type: {
      const { id } = action.meta.params
      return {
        ...state,
        [id]: uniq([...(state[id] || []), ...action.payload.map(c => c.id)]),
      }
    }
    case deleteCommentActions.success.type: {
      const { artworkId, id } = action.meta.params
      return {
        ...state,
        [artworkId]: state[artworkId].filter(c => c !== id),
      }
    }
    default:
      return state
  }
}

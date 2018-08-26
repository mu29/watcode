import uniq from 'lodash/uniq'
import { initialState } from './selectors'
import {
  createBookmarkActions,
  createBookmarksActions,
  readBookmarksActions,
  deleteBookmarkActions,
  readRecommendationsActions,
} from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case createBookmarkActions.success.type:
      return {
        ...state,
        bookmarks: uniq([...state.bookmarks, action.payload.id]),
      }
    case createBookmarksActions.success.type:
      return {
        ...state,
        bookmarks: uniq([...state.bookmarks, ...action.payload.map(b => b.id)]),
      }
    case readBookmarksActions.success.type:
      return {
        ...state,
        bookmarks: uniq([...state.bookmarks, ...action.payload.map(b => b.id)]),
      }
    case deleteBookmarkActions.success.type:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(c => c !== action.payload.id),
      }
    case readRecommendationsActions.success.type:
      return {
        ...state,
        recommendations: uniq([...state.recommendations, ...action.payload.map(r => r.id)]),
      }
    default:
      return state
  }
}

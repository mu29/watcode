import uniq from 'lodash/uniq'
import { initialState } from './selectors'
import {
  createBookmarkActions,
  readBookmarksActions,
  deleteBookmarkActions,
} from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case createBookmarkActions.success.type:
      return {
        ...state,
        bookmarks: uniq([...state.bookmarks, action.payload.id]),
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
    default:
      return state
  }
}

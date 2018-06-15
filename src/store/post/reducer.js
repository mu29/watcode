import uniq from 'lodash/uniq'
import { initialState } from './selectors'
import { readMyPostListActions } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case readMyPostListActions.success.type:
      return {
        ...state,
        myPostIds: uniq([...state.myPostIds, ...action.payload.map(p => p.id)]),
      }
    default:
      return state
  }
}

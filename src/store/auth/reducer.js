import { initialState } from './selectors'
import { authorizeAction } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case authorizeAction.type:
      return { ...state, user: action.payload.user }
    default:
      return state
  }
}

import { initialState } from './selectors'
import { authorizeActions } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case authorizeActions.success.type:
      return { ...state, user: action.payload.user }
    default:
      return state
  }
}

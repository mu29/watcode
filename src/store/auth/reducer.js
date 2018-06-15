import { initialState } from './selectors'
import {
  autoLoginActions,
  loginActions,
  registerActions,
  readProfileActions,
} from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case autoLoginActions.success.type:
    case loginActions.success.type:
    case registerActions.success.type:
    case readProfileActions.success.type:
      return { ...state, user: action.payload }
    case autoLoginActions.failure.type:
      return { ...state, user: {} }
    default: {
      return state
    }
  }
}

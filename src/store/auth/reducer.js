import { initialState } from './selectors'
import { authorizeActions, enterAdminModeAction } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case enterAdminModeAction.type:
      return { ...state, isAdmin: action.payload.passcode === 'qndxkr' }
    case authorizeActions.success.type:
      return { ...state, user: action.payload.user }
    default:
      return state
  }
}

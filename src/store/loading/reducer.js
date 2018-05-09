import { initialState } from './selectors'

export default (state = initialState, action) => {
  switch (true) {
    case action.type.endsWith('_REQUEST'):
      return {
        ...state,
        pendings: [...state.pendings, action.type.replace('_REQUEST', '')],
      }
    case action.type.endsWith('_SUCCESS'):
    case action.type.endsWith('_FAILURE'): {
      const type = action.type.replace('_SUCCESS', '').replace('_FAILURE', '')
      return {
        ...state,
        pendings: state.pendings.filter(p => p !== type),
      }
    }
    default:
      return state
  }
}

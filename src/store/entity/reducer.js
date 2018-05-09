import { normalize } from 'normalizr'
import mergeWith from 'lodash/mergeWith'
import { initialState } from './selectors'

export default (state = initialState, action) => {
  const { payload, meta } = action
  if (meta && meta.schema && payload) {
    const { entities } = normalize(payload, Array.isArray(payload) ? [meta.schema] : meta.schema)
    return mergeWith({}, state, entities)
  }

  return state
}

import { put, call, cancelled } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import { camelizeKeys, decamelizeKeys } from 'services/utils'

export const actionCreatorFactory = (prefix) => {
  const base = prefix ? `${prefix}/` : ''

  const actionCreator = (type, meta, map = p => p, error = false) => {
    const fullType = base + type
    return Object.assign((payload) => {
      const action = {
        type: fullType,
        payload: map(payload),
        meta,
        error,
      }

      return action
    }, {
      type: fullType,
      toString: () => type,
    })
  }

  const asyncActionCreators = (type, meta) => ({
    type: base + type,
    request: actionCreator(`${type}_REQUEST`, meta, decamelizeKeys),
    success: actionCreator(`${type}_SUCCESS`, meta, camelizeKeys),
    failure: actionCreator(`${type}_FAILURE`, meta, camelizeKeys, true),
  })

  return Object.assign(actionCreator, { async: asyncActionCreators })
}

export const bindAsyncAction = ({
  actions,
  worker,
  onSuccess,
  onError,
}) => function* (api, action) {
  try {
    const result = yield call(worker, api, action)
    yield put(actions.success(result))
    if (onSuccess) {
      yield onSuccess({ params: action.payload, result })
    }
  } catch (error) {
    yield put(actions.failure({ params: action.payload, error }))
    if (onError) {
      yield onError({ params: action.payload, error })
    }
  } finally {
    if (yield cancelled()) {
      yield put(actions.failure({ error: 'cancelled' }))
    }
  }
}

export const formErrorHandler = (form, messages) => ({ error }) => {
  const key = Object.entries(messages).find(i => i[1] === error.message)
  return put(stopSubmit(form, { [key ? key[0] : '_error']: error.message }))
}

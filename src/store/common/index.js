import { put, call, cancelled } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import { camelizeKeys, decamelizeKeys } from 'services/utils'

export const actionCreatorFactory = (prefix) => {
  const base = prefix ? `${prefix}/` : ''

  const actionCreator = (type, meta, camelize = false, isError = false) => {
    const fullType = base + type
    return Object.assign((payload) => {
      const action = {
        type: fullType,
        payload: camelize ? camelizeKeys(payload) : decamelizeKeys(payload),
        meta,
        error: isError,
      }

      return action
    }, {
      type: fullType,
      toString: () => type,
    })
  }

  const asyncActionCreators = (type, meta) => ({
    type: base + type,
    request: actionCreator(`${type}_REQUEST`, meta),
    success: actionCreator(`${type}_SUCCESS`, meta, true),
    failure: actionCreator(`${type}_FAILURE`, meta, true, true),
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

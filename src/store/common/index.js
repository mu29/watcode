import { put, call, cancelled } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'

export const actionCreatorFactory = (prefix) => {
  const base = prefix ? `${prefix}/` : ''

  const actionCreator = (type, meta, error = false) => {
    const fullType = base + type
    return Object.assign((payload) => {
      const action = {
        type: fullType,
        payload,
        meta,
        error,
      }

      return action
    }, {
      type: fullType,
      toString: () => fullType,
    })
  }

  const asyncActionCreators = (type, meta) => ({
    type: base + type,
    request: actionCreator(`${type}_REQUEST`, meta),
    success: actionCreator(`${type}_SUCCESS`, meta),
    failure: actionCreator(`${type}_FAILURE`, meta, true),
  })

  return Object.assign(actionCreator, { async: asyncActionCreators })
}

export const bindAsyncAction = ({
  actions,
  worker,
  onSuccess,
  onError,
}) => function* (services, action) {
  try {
    const result = yield call(worker, services, action)
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

export const formErrorHandler = (form, messages, displayMessages) => ({ error }) => {
  const key = Object.entries(messages).find(i => i[1] === error.message)
  const messageKey = key ? key[0] : '_error'
  const message = displayMessages && messageKey ? displayMessages[messageKey] : error.message
  return put(stopSubmit(form, { [messageKey]: message }))
}

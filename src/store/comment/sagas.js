import { put, call, takeLatest } from 'redux-saga/effects'
import { reset } from 'redux-form'
import { bindAsyncAction } from 'store/common'
import {
  createCommentActions,
  readCommentsActions,
  deleteCommentActions,
} from './actions'

export const createCommentWorker = function* ({ api }, { payload }) {
  const result = yield call(api.post, `/artworks/${payload.id}/comments`, { data: payload })
  return [result]
}

export const readCommentsWorker = function* ({ api }, { payload }) {
  const result = yield call(api.get, `/artworks/${payload.id}/comments`)
  return [result.comments, { cursor: result.cursor }]
}

export const deleteCommentWorker = function* ({ api }, { payload }) {
  const result = yield call(api.delete, `/comments/${payload.id}`, { params: payload })
  return [result]
}

export const createCommentExecutor = bindAsyncAction({
  actions: createCommentActions,
  worker: createCommentWorker,
  onSuccess: () => put(reset('comment')),
})

export const readCommentsExecutor = bindAsyncAction({
  actions: readCommentsActions,
  worker: readCommentsWorker,
})

export const deleteCommentExecutor = bindAsyncAction({
  actions: deleteCommentActions,
  worker: deleteCommentWorker,
})

export default function* (services) {
  yield takeLatest(createCommentActions.request.type, createCommentExecutor, services)
  yield takeLatest(readCommentsActions.request.type, readCommentsExecutor, services)
  yield takeLatest(deleteCommentActions.request.type, deleteCommentExecutor, services)
}

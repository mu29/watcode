import { call, takeLatest } from 'redux-saga/effects'
import { bindAsyncAction } from 'store/common'
import {
  createBookmarkActions,
  readBookmarksActions,
  deleteBookmarkActions,
} from './actions'

export const createBookmarkWorker = function* ({ api }, { payload }) {
  const result = yield call(api.post, `/artworks/${payload.id}/bookmarks`, { data: payload })
  return [result]
}

export const readBookmarksWorker = function* ({ api }) {
  const result = yield call(api.get, '/bookmarks')
  return [result.artworks]
}

export const deleteBookmarkWorker = function* ({ api }, { payload }) {
  const result = yield call(api.delete, `/bookmarks/${payload.id}`)
  return [result]
}

export const createBookmarkExecutor = bindAsyncAction({
  actions: createBookmarkActions,
  worker: createBookmarkWorker,
})

export const readBookmarksExecutor = bindAsyncAction({
  actions: readBookmarksActions,
  worker: readBookmarksWorker,
})

export const deleteBookmarkExecutor = bindAsyncAction({
  actions: deleteBookmarkActions,
  worker: deleteBookmarkWorker,
})

export default function* (services) {
  yield takeLatest(createBookmarkActions.request.type, createBookmarkExecutor, services)
  yield takeLatest(readBookmarksActions.request.type, readBookmarksExecutor, services)
  yield takeLatest(deleteBookmarkActions.request.type, deleteBookmarkExecutor, services)
}

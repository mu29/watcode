import { put, call, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { bindAsyncAction } from 'store/common'
import {
  createBookmarkActions,
  createBookmarksActions,
  readBookmarksActions,
  deleteBookmarkActions,
  readRecommendationsActions,
} from './actions'

export const createBookmarkWorker = function* ({ api }, { payload }) {
  const result = yield call(api.post, `/api/artworks/${payload.id}/bookmarks`, { data: payload })
  return [result]
}

export const createBookmarksWorker = function* ({ api }, { payload }) {
  const result = yield call(api.post, '/api/bookmarks', { data: payload })
  return [result.artworks]
}

export const readBookmarksWorker = function* ({ api }) {
  const result = yield call(api.get, '/api/bookmarks')
  return [result.artworks]
}

export const deleteBookmarkWorker = function* ({ api }, { payload }) {
  const result = yield call(api.delete, `/api/bookmarks/${payload.id}`)
  return [result]
}

export const readRecommendationsWorker = function* ({ api }) {
  const result = yield call(api.get, '/api/recommendations')
  return [result.artworks]
}

export const createBookmarkExecutor = bindAsyncAction({
  actions: createBookmarkActions,
  worker: createBookmarkWorker,
})

export const createBookmarksExecutor = bindAsyncAction({
  actions: createBookmarksActions,
  worker: createBookmarksWorker,
  onSuccess: () => put(push('/bookmarks')),
})

export const readBookmarksExecutor = bindAsyncAction({
  actions: readBookmarksActions,
  worker: readBookmarksWorker,
})

export const deleteBookmarkExecutor = bindAsyncAction({
  actions: deleteBookmarkActions,
  worker: deleteBookmarkWorker,
})

export const readRecommendationsExecutor = bindAsyncAction({
  actions: readRecommendationsActions,
  worker: readRecommendationsWorker,
})

export default function* (services) {
  yield takeLatest(createBookmarkActions.request.type, createBookmarkExecutor, services)
  yield takeLatest(createBookmarksActions.request.type, createBookmarksExecutor, services)
  yield takeLatest(readBookmarksActions.request.type, readBookmarksExecutor, services)
  yield takeLatest(deleteBookmarkActions.request.type, deleteBookmarkExecutor, services)
  yield takeLatest(readRecommendationsActions.request.type, readRecommendationsExecutor, services)
}

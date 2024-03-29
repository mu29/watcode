import { put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { replace } from 'react-router-redux'
import { bindAsyncAction } from 'store/common'
import {
  readArtworkActions,
  readArtworksActions,
  readPopularArtworksActions,
  searchArtworksActions,
  prepareSearchActions,
} from './actions'

export const readArtworkWorker = function* ({ api }, { payload }) {
  const result = yield call(api.get, `/api/artworks/${payload.id}`)
  return [result]
}

export const readArtworksWorker = function* ({ api }, { payload }) {
  const result = yield call(api.get, '/api/artworks', { params: payload })
  return [result.artworks, { cursor: result.cursor }]
}

export const readPopularArtworksWorker = function* ({ api }, { payload }) {
  const result = yield call(api.get, '/api/artworks/popular', { params: payload })
  return [result.artworks, { cursor: result.cursor }]
}

export const searchArtworksWorker = function* ({ api }, { payload }) {
  const result = yield call(api.get, '/api/artworks/search', { params: payload })
  return [result.artworks, { cursor: result.cursor }]
}

export const prepareSearchWorker = function* (_, { payload }) {
  yield put(replace(`/search?query=${payload.query}`))
  yield put(searchArtworksActions.request({ query: payload.query }))
  return [payload]
}

export const readArtworkExecutor = bindAsyncAction({
  actions: readArtworkActions,
  worker: readArtworkWorker,
})

export const readArtworksExecutor = bindAsyncAction({
  actions: readArtworksActions,
  worker: readArtworksWorker,
})

export const readPopularArtworksExecutor = bindAsyncAction({
  actions: readPopularArtworksActions,
  worker: readPopularArtworksWorker,
})

export const searchArtworksExecutor = bindAsyncAction({
  actions: searchArtworksActions,
  worker: searchArtworksWorker,
})

export const prepareSearchExecutor = bindAsyncAction({
  actions: prepareSearchActions,
  worker: prepareSearchWorker,
})

export default function* (services) {
  yield takeLatest(readArtworkActions.request.type, readArtworkExecutor, services)
  yield takeLatest(readArtworksActions.request.type, readArtworksExecutor, services)
  yield takeLatest(readPopularArtworksActions.request.type, readPopularArtworksExecutor, services)
  yield takeEvery(searchArtworksActions.request.type, searchArtworksExecutor, services)
  yield takeLatest(prepareSearchActions.request.type, prepareSearchExecutor, services)
}

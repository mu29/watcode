import { call, takeLatest } from 'redux-saga/effects'
import { bindAsyncAction } from 'store/common'
import {
  readArtworkActions,
  readArtworksActions,
  readPopularArtworksActions,
} from './actions'

export const readArtworkWorker = function* ({ api }, { payload }) {
  const result = yield call(api.get, `/artworks/${payload.id}`)
  return [result.artwork]
}

export const readArtworksWorker = function* ({ api }, { payload }) {
  const result = yield call(api.get, '/artworks', { params: payload })
  return [result.artworks, { cursor: result.cursor }]
}

export const readPopularArtworksWorker = function* ({ api }, { payload }) {
  const result = yield call(api.get, '/artworks/popular', { params: payload })
  return [result.artworks, { cursor: result.cursor }]
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

export default function* (services) {
  yield takeLatest(readArtworkActions.request.type, readArtworkExecutor, services)
  yield takeLatest(readArtworksActions.request.type, readArtworksExecutor, services)
  yield takeLatest(readPopularArtworksActions.request.type, readPopularArtworksExecutor, services)
}

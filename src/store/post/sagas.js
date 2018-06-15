import { call, takeLatest } from 'redux-saga/effects'
import { bindAsyncAction } from 'store/common'
import { readMyPostListActions } from './actions'

export const readMyPostListWorker = function* (api, { payload }) {
  const posts = yield call(api.get, '/v4/me/posts', { params: payload })
  return posts
}

export const readMyPostListExecutor = bindAsyncAction({
  actions: readMyPostListActions,
  worker: readMyPostListWorker,
})

export default function* ({ api }) {
  yield takeLatest(readMyPostListActions.request.type, readMyPostListExecutor, api)
}

import { put, call, takeLatest } from 'redux-saga/effects'
import { readMyPostListActions } from './actions'
import saga, {
  readMyPostListWorker,
  readMyPostListExecutor,
} from './sagas'

const api = {
  post: () => {},
  get: () => {},
  put: () => {},
  delete: () => {},
}

describe('Post/Sagas', () => {
  describe('나의 글 목록', () => {
    const action = readMyPostListActions.request({ page: 1 })
    const error = { message: 'error' }

    it('적절한 API를 호출한다', () => {
      const generator = readMyPostListWorker(api, action)
      expect(generator.next().value)
        .toEqual(call(api.get, '/v4/me/posts', { params: action.payload }))
    })

    it('success 액션을 호출한다', () => {
      const user = action.payload
      const generator = readMyPostListExecutor(api, action)

      expect(generator.next().value)
        .toEqual(call(readMyPostListWorker, api, action))
      expect(generator.next(user).value)
        .toEqual(put(readMyPostListActions.success(user)))
    })

    it('failure 액션을 호출한다', () => {
      const generator = readMyPostListExecutor(api, action)

      expect(generator.next().value)
        .toEqual(call(readMyPostListWorker, api, action))
      expect(generator.throw(error).value)
        .toEqual(put(readMyPostListActions.failure({ params: action.payload, error })))
    })
  })

  it('saga', () => {
    const generator = saga({ api })
    expect(generator.next().value)
      .toEqual(takeLatest(readMyPostListActions.request.type, readMyPostListExecutor, api))
  })
})

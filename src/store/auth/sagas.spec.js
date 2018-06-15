import { put, call, takeLatest } from 'redux-saga/effects'
import { stopSubmit } from 'redux-form'
import {
  autoLoginActions,
  loginActions,
  registerActions,
  readProfileActions,
} from './actions'
import saga, {
  autoLoginWorker,
  autoLoginExecutor,
  loginWorker,
  loginExecutor,
  registerWorker,
  registerExecutor,
  readProfileWorker,
  readProfileExecutor,
} from './sagas'

const api = {
  get: () => {},
  post: () => {},
  setToken: jest.fn(),
}

describe('Auth/Sagas', () => {
  describe('로그인', () => {
    const action = loginActions.request({ email: 'mu29@yeoubi.net' })
    const error = { message: 'error' }

    it('적절한 API를 호출한다', () => {
      const generator = loginWorker(api, action)
      expect(generator.next().value)
        .toEqual(call(api.post, '/v4/me/login', { data: action.payload }))
    })

    it('success 액션을 호출한다', () => {
      const user = action.payload
      const generator = loginExecutor(api, action)

      expect(generator.next().value)
        .toEqual(call(loginWorker, api, action))
      expect(api.setToken).toBeCalled()
      expect(generator.next(user).value)
        .toEqual(put(loginActions.success(user)))
    })

    it('failure 액션을 호출한다', () => {
      const generator = loginExecutor(api, action)

      expect(generator.next().value)
        .toEqual(call(loginWorker, api, action))
      expect(generator.throw(error).value)
        .toEqual(put(loginActions.failure({ params: action.payload, error })))
      expect(generator.next().value)
        .toEqual(put(stopSubmit('login', { _error: 'error' })))
    })
  })

  describe('회원가입', () => {
    const action = registerActions.request({ email: 'mu29@yeoubi.net' })
    const error = { message: 'error' }

    it('적절한 API를 호출한다', () => {
      const generator = registerWorker(api, action)
      expect(generator.next().value)
        .toEqual(call(api.post, '/v4/me', { data: action.payload }))
    })

    it('success 액션을 호출한다', () => {
      const user = action.payload
      const generator = registerExecutor(api, action)

      expect(generator.next().value)
        .toEqual(call(registerWorker, api, action))
      expect(api.setToken).toBeCalled()
      expect(generator.next(user).value)
        .toEqual(put(registerActions.success(user)))
    })

    it('failure 액션을 호출한다', () => {
      const generator = registerExecutor(api, action)

      expect(generator.next().value)
        .toEqual(call(registerWorker, api, action))
      expect(generator.throw(error).value)
        .toEqual(put(registerActions.failure({ params: action.payload, error })))
      expect(generator.next().value)
        .toEqual(put(stopSubmit('register', { _error: 'error' })))
    })
  })

  describe('프로필 읽기', () => {
    const action = readProfileActions.request({ token: 'token' })
    const error = { message: 'error' }

    it('적절한 API를 호출한다', () => {
      const generator = readProfileWorker(api, action)
      expect(generator.next().value)
        .toEqual(call(api.get, '/v4/me'))
    })

    it('success 액션을 호출한다', () => {
      const user = action.payload
      const generator = readProfileExecutor(api, action)

      expect(generator.next().value)
        .toEqual(call(readProfileWorker, api, action))
      expect(generator.next(user).value)
        .toEqual(put(readProfileActions.success(user)))
    })

    it('failure 액션을 호출한다', () => {
      const generator = readProfileExecutor(api, action)

      expect(generator.next().value)
        .toEqual(call(readProfileWorker, api, action))
      expect(generator.throw(error).value)
        .toEqual(put(readProfileActions.failure({ params: action.payload, error })))
    })
  })

  it('saga', () => {
    const generator = saga({ api })
    expect(generator.next().value)
      .toEqual(takeLatest(autoLoginActions.request.type, autoLoginExecutor, api))
    expect(generator.next().value)
      .toEqual(takeLatest(loginActions.request.type, loginExecutor, api))
    expect(generator.next().value)
      .toEqual(takeLatest(registerActions.request.type, registerExecutor, api))
    expect(generator.next().value)
      .toEqual(takeLatest(readProfileActions.request.type, readProfileExecutor, api))
  })
})

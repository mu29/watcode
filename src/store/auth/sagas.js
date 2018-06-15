import { put, call, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import Cookies from 'universal-cookie'
import { bindAsyncAction, formErrorHandler } from 'store/common'
import {
  autoLoginActions,
  loginActions,
  registerActions,
  readProfileActions,
} from './actions'

const cookies = new Cookies()

const saveToken = (user, api) => {
  const token = user ? user.token : ''
  cookies.set('token', token, { maxAge: 1209600, path: '/' })
  api.setToken(token)
}

const clearCookie = () => {
  cookies.remove('token', { path: '/' })
}

export const autoLoginWorker = function* (api, { payload }) {
  api.setToken(payload.token)
  const user = yield call(api.get, '/v4/me')
  saveToken(user, api)
  return user
}

export const loginWorker = function* (api, { payload }) {
  const user = yield call(api.post, '/v4/me/login', { data: payload })
  saveToken(user, api)
  return user
}

export const registerWorker = function* (api, { payload }) {
  const user = yield call(api.post, '/v4/me', { data: payload })
  saveToken(user, api)
  return user
}

export const readProfileWorker = function* (api) {
  const user = yield call(api.get, '/v4/me')
  return user
}

export const autoLoginExecutor = bindAsyncAction({
  actions: autoLoginActions,
  worker: autoLoginWorker,
  onError: ({ params }) => {
    if (params.token) {
      clearCookie()
      return put(push('login'))
    }
    return clearCookie()
  },
})

export const loginExecutor = bindAsyncAction({
  actions: loginActions,
  worker: loginWorker,
  onSuccess: ({ params }) => put(push(params.redirect || '/profile')),
  onError: formErrorHandler('login', {
    email: '계정을 찾을 수 없습니다.',
    password: '비밀번호가 일치하지 않습니다.',
  }),
})

export const registerExecutor = bindAsyncAction({
  actions: registerActions,
  worker: registerWorker,
  onSuccess: () => put(push('/profile')),
  onError: formErrorHandler('register', {
    email: '이미 사용중인 메일 주소입니다.',
    password: '비밀번호는 8 ~ 20자 사이로 정해주세요.',
    author: '이미 사용중인 필명입니다.',
  }),
})

export const readProfileExecutor = bindAsyncAction({
  actions: readProfileActions,
  worker: readProfileWorker,
})

export default function* ({ api }) {
  yield takeLatest(autoLoginActions.request.type, autoLoginExecutor, api)
  yield takeLatest(loginActions.request.type, loginExecutor, api)
  yield takeLatest(registerActions.request.type, registerExecutor, api)
  yield takeLatest(readProfileActions.request.type, readProfileExecutor, api)
}

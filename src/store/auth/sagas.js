import { put, call, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { bindAsyncAction, formErrorHandler } from 'store/common'
import {
  signInActions,
  signUpActions,
} from './actions'

export const signInWorker = function* (services, { payload }) {
  const user = yield call(services.post, '/v4/me/login', { data: payload })
  return user
}

export const signUpWorker = function* (services, { payload }) {
  const result = yield call(services.firebase.signUp, payload.email, payload.password)
  return result.user
}

export const signInExecutor = bindAsyncAction({
  actions: signInActions,
  worker: signInWorker,
  onSuccess: ({ params }) => put(push(params.redirect || '/')),
  onError: formErrorHandler('signIn', {
    email: '계정을 찾을 수 없습니다.',
    password: '비밀번호가 일치하지 않습니다.',
  }),
})

export const signUpExecutor = bindAsyncAction({
  actions: signUpActions,
  worker: signUpWorker,
  onSuccess: () => put(push('/')),
  onError: formErrorHandler('signUp', {
    email: 'The email address is already in use by another account.',
    password: 'Password should be at least 6 characters',
  }, {
    email: '이미 사용중인 메일 주소입니다.',
    password: '6자 이상의 비밀번호를 사용해주세요.',
  }),
})

export default function* (services) {
  yield takeLatest(signInActions.request.type, signInExecutor, services)
  yield takeLatest(signUpActions.request.type, signUpExecutor, services)
}

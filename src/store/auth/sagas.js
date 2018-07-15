import { put, call, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { bindAsyncAction, formErrorHandler } from 'store/common'
import {
  signInActions,
  signUpActions,
  signOutActions,
} from './actions'

export const signInWorker = function* ({ firebase }, { payload }) {
  const result = yield call(firebase.signIn, payload.email, payload.password)
  return [result.user]
}

export const signUpWorker = function* ({ firebase }, { payload }) {
  const result = yield call(firebase.signUp, payload.email, payload.password)
  yield call(firebase.updateProfile, { displayName: payload.name })
  return [result.user]
}

export const signOutWorker = function* ({ firebase }) {
  yield call(firebase.signOut)
  return null
}

export const signInExecutor = bindAsyncAction({
  actions: signInActions,
  worker: signInWorker,
  onSuccess: ({ params }) => put(push(params.redirect || '/')),
  onError: formErrorHandler('signIn', {
    email: 'There is no user record corresponding to this identifier. The user may have been deleted.',
    password: 'The password is invalid or the user does not have a password.',
  }, {
    email: '사용자 정보를 찾을 수 없습니다.',
    password: '비밀번호를 확인해주세요.',
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

export const signOutExecutor = bindAsyncAction({
  actions: signOutActions,
  worker: signOutWorker,
  onSuccess: () => put(push('/')),
})

export default function* (services) {
  yield takeLatest(signInActions.request.type, signInExecutor, services)
  yield takeLatest(signUpActions.request.type, signUpExecutor, services)
  yield takeLatest(signOutActions.request.type, signOutExecutor, services)
}

import { all, fork } from 'redux-saga/effects'
import * as auth from './auth/sagas'
import * as post from './post/sagas'

const sagas = [auth, post]

export default function* (services = {}) {
  yield all(sagas.map(saga => fork(saga, services)))
}

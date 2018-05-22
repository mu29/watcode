import * as auth from './auth/selectors'
import * as entity from './entity/selectors'
import * as loading from './loading/selectors'
import * as post from './post/selectors'

const selectors = [auth, entity, loading, post]
  .reduce((a, c) => ({ ...a, ...c }), {})

Object.keys(selectors).forEach((name) => {
  module.exports[name] = selectors[name]
})

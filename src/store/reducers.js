import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import * as auth from './auth/reducer'
import * as entity from './entity/reducer'
import * as loading from './loading/reducer'
import * as post from './post/reducer'

const reducers = {
  form: formReducer,
  router: routerReducer,
  auth,
  entity,
  loading,
  post,
}

export default combineReducers(reducers)

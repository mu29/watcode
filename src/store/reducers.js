import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import auth from './auth/reducer'
import entity from './entity/reducer'
import loading from './loading/reducer'
import post from './post/reducer'

const reducers = {
  form: formReducer,
  router: routerReducer,
  auth,
  entity,
  loading,
  post,
}

export default combineReducers(reducers)

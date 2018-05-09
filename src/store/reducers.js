import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

const reducers = {
  form: formReducer,
  router: routerReducer,
}

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

req.keys().forEach((key) => {
  const reducerName = key.replace(/\.\/(.+)\/.+$/, '$1')
  reducers[reducerName] = req(key).default
})
export default combineReducers(reducers)

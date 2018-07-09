import { actionCreatorFactory } from '../common'

const factory = actionCreatorFactory('Auth')

export const signInActions = factory.async('SIGN_IN')
export const signUpActions = factory.async('SIGN_UP')
export const signOutActions = factory.async('SIGN_OUT')
export const authorizeAction = factory('AUTHORIZE')

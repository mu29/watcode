import { actionCreatorFactory } from '../common'

const factory = actionCreatorFactory('Auth')

export const autoLoginActions = factory.async('AUTO_LOGIN')

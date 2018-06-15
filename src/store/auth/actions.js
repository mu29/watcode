import { actionCreatorFactory } from 'store/common'
import { userSchema } from 'store/schemas'

const factory = actionCreatorFactory('Auth')

export const autoLoginActions = factory.async('AUTO_LOGIN', { schema: userSchema })
export const loginActions = factory.async('LOGIN', { schema: userSchema })
export const registerActions = factory.async('REGISTER', { schema: userSchema })
export const readProfileActions = factory.async('READ_PROFILE', { schema: userSchema })

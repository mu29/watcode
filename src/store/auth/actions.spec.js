import {
  loginActions,
  registerActions,
  readProfileActions,
} from './actions'

describe('Auth/Actions', () => {
  describe('loginActions', () => {
    it('REQUEST', () => {
      expect(loginActions.request({
        email: 'mu29@yeoubi.net',
        password: '1234',
      })).toEqual(expect.objectContaining({
        type: 'Auth/LOGIN_REQUEST',
        payload: {
          email: 'mu29@yeoubi.net',
          password: '1234',
        },
      }))
    })

    it('SUCCESS', () => {
      expect(loginActions.success({
        id: 112047,
        email: 'mu29@yeoubi.net',
        password: '1234',
        author: '버프',
      })).toEqual(expect.objectContaining({
        type: 'Auth/LOGIN_SUCCESS',
        payload: {
          id: 112047,
          email: 'mu29@yeoubi.net',
          password: '1234',
          author: '버프',
        },
      }))
    })

    it('FAILURE', () => {
      expect(loginActions.failure({
        error: 'error',
      })).toEqual(expect.objectContaining({
        type: 'Auth/LOGIN_FAILURE',
        payload: {
          error: 'error',
        },
      }))
    })
  })

  describe('registerActions', () => {
    it('REQUEST', () => {
      expect(registerActions.request({
        email: 'mu29@yeoubi.net',
        password: '1234',
        author: '버프',
      })).toEqual(expect.objectContaining({
        type: 'Auth/REGISTER_REQUEST',
        payload: {
          email: 'mu29@yeoubi.net',
          password: '1234',
          author: '버프',
        },
      }))
    })

    it('SUCCESS', () => {
      expect(registerActions.success({
        id: 112047,
        email: 'mu29@yeoubi.net',
        password: '1234',
        author: '버프',
      })).toEqual(expect.objectContaining({
        type: 'Auth/REGISTER_SUCCESS',
        payload: {
          id: 112047,
          email: 'mu29@yeoubi.net',
          password: '1234',
          author: '버프',
        },
      }))
    })

    it('FAILURE', () => {
      expect(registerActions.failure({
        error: 'error',
      })).toEqual(expect.objectContaining({
        type: 'Auth/REGISTER_FAILURE',
        payload: {
          error: 'error',
        },
      }))
    })
  })

  describe('readProfileActions', () => {
    it('REQUEST', () => {
      expect(readProfileActions.request({
        token: 'token',
      })).toEqual(expect.objectContaining({
        type: 'Auth/READ_PROFILE_REQUEST',
        payload: {
          token: 'token',
        },
      }))
    })

    it('SUCCESS', () => {
      expect(readProfileActions.success({
        id: 112047,
        email: 'mu29@yeoubi.net',
        password: '1234',
        author: '버프',
      })).toEqual(expect.objectContaining({
        type: 'Auth/READ_PROFILE_SUCCESS',
        payload: {
          id: 112047,
          email: 'mu29@yeoubi.net',
          password: '1234',
          author: '버프',
        },
      }))
    })

    it('FAILURE', () => {
      expect(readProfileActions.failure({
        error: 'error',
      })).toEqual(expect.objectContaining({
        type: 'Auth/READ_PROFILE_FAILURE',
        payload: {
          error: 'error',
        },
      }))
    })
  })
})

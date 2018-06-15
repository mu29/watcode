import { initialState } from './selectors'
import {
  loginActions,
  registerActions,
  readProfileActions,
} from './actions'
import reducer from './reducer'

const state = nextState => ({
  ...initialState,
  ...nextState,
})

describe('Auth/Reducer', () => {
  it('기본 상태를 반환한다', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  describe('로그인 성공 시', () => {
    it('유저 정보를 설정한다', () => {
      expect(reducer(
        initialState,
        loginActions.success({ email: 'mu29@yeoubi.net' }),
      )).toEqual(state({ user: { email: 'mu29@yeoubi.net' } }))
    })

    it('유저 정보를 덮어 씌운다', () => {
      expect(reducer(
        { user: { email: 'mu29gl@gmail.com' } },
        loginActions.success({ email: 'mu29@yeoubi.net' }),
      )).toEqual(state({ user: { email: 'mu29@yeoubi.net' } }))
    })
  })

  describe('회원가입 성공 시', () => {
    it('유저 정보를 설정한다', () => {
      expect(reducer(
        initialState,
        registerActions.success({ email: 'mu29@yeoubi.net' }),
      )).toEqual(state({ user: { email: 'mu29@yeoubi.net' } }))
    })

    it('유저 정보를 덮어 씌운다', () => {
      expect(reducer(
        { user: { email: 'mu29gl@gmail.com' } },
        registerActions.success({ email: 'mu29@yeoubi.net' }),
      )).toEqual(state({ user: { email: 'mu29@yeoubi.net' } }))
    })
  })

  describe('프로필 읽기 성공 시', () => {
    it('유저 정보를 설정한다', () => {
      expect(reducer(
        initialState,
        readProfileActions.success({ email: 'mu29@yeoubi.net' }),
      )).toEqual(state({ user: { email: 'mu29@yeoubi.net' } }))
    })

    it('유저 정보를 덮어 씌운다', () => {
      expect(reducer(
        { user: { email: 'mu29gl@gmail.com' } },
        readProfileActions.success({ email: 'mu29@yeoubi.net' }),
      )).toEqual(state({ user: { email: 'mu29@yeoubi.net' } }))
    })
  })
})

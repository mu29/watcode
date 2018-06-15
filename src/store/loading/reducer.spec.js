import { loginActions } from 'store/actions'
import { initialState } from './selectors'
import reducer from './reducer'

const state = nextState => ({
  ...initialState,
  ...nextState,
})

describe('Loading/Reducer', () => {
  it('기본 상태를 반환한다', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  describe('로그인 액션을 실행하면', () => {
    it('상태에 로딩 중임을 설정한다', () => {
      expect(reducer(
        initialState,
        loginActions.request({}),
      )).toEqual(state({ pendings: [loginActions.type] }))
    })
  })

  describe('로그인 액션이 성공하면', () => {
    it('상태의 로딩 중 여부를 비워준다', () => {
      expect(reducer(
        { pendings: [loginActions.type] },
        loginActions.success({}),
      )).toEqual(state({ pendings: [] }))
    })
  })

  describe('로그인 액션이 실패하면', () => {
    it('상태의 로딩 중 여부를 비워준다', () => {
      expect(reducer(
        { pendings: [loginActions.type] },
        loginActions.failure({}),
      )).toEqual(state({ pendings: [] }))
    })
  })
})

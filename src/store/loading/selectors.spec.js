import { autoLoginActions, loginActions } from 'store/actions'
import * as selectors from './selectors'

const state = {
  loading: {
    pendings: [loginActions.type],
  },
}

describe('Loading/Selectors', () => {
  it('기본 상태', () => {
    expect(selectors.initialState).toEqual({
      pendings: [],
    })
  })

  it('getIsLoading', () => {
    expect(selectors.getIsLoading(state, loginActions.type)).toBe(true)
    expect(selectors.getIsLoading(state, autoLoginActions.type)).toBe(false)
  })
})

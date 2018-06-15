import { initialState } from './selectors'

describe('Auth/Selectors', () => {
  it('기본 상태', () => {
    expect(initialState).toEqual({ user: {} })
  })
})

import { initialState } from './selectors'
import reducer from './reducer'
import { fetchCoinListActions } from '../billing/actions'

const state = nextState => ({
  ...initialState,
  ...nextState,
})

describe('Entity/Reducer', () => {
  it('기본 상태를 반환한다', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  describe('엔티티를 가져온 경우', () => {
    it('정규화하여 상태에 저장한다', () => {
      expect(reducer(
        initialState,
        fetchCoinListActions.success([
          { id: 1, name: '코인 1개' },
          { id: 2, name: '코인 3개' },
        ]),
      )).toEqual(state({
        coins: {
          1: { id: 1, name: '코인 1개' },
          2: { id: 2, name: '코인 3개' },
        },
      }))
    })
  })
})

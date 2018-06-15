import * as selectors from './selectors'

const state = {
  entity: {
    users: {
      112047: {
        id: 112047,
        email: 'mu29@yeoubi.net',
        author: '버프',
      },
    },
  },
}

describe('Entity/Selectors', () => {
  it('기본 상태', () => {
    expect(selectors.initialState).toEqual({
      users: {},
      posts: {},
      coins: {},
    })
  })

  it('getEntity', () => {
    expect(selectors.getEntity(state)).toEqual(state.entity)
  })
})

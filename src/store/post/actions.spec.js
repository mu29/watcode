import { readMyPostListActions } from './actions'

describe('Post/Actions', () => {
  describe('readMyPostListActions', () => {
    it('REQUEST', () => {
      expect(readMyPostListActions.request({
        page: 1,
      })).toEqual(expect.objectContaining({
        type: 'Post/READ_MY_POST_LIST_REQUEST',
        payload: {
          page: 1,
        },
      }))
    })

    it('SUCCESS', () => {
      expect(readMyPostListActions.success([
        { id: 1 },
      ])).toEqual(expect.objectContaining({
        type: 'Post/READ_MY_POST_LIST_SUCCESS',
        payload: [
          { id: 1 },
        ],
      }))
    })

    it('FAILURE', () => {
      expect(readMyPostListActions.failure({
        error: 'error',
      })).toEqual(expect.objectContaining({
        type: 'Post/READ_MY_POST_LIST_FAILURE',
        payload: {
          error: 'error',
        },
      }))
    })
  })
})

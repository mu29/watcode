import { actionCreatorFactory } from '.'

describe('actionCreatorFactory', () => {
  describe('prefix가 없는 경우', () => {
    const factory = actionCreatorFactory()

    it('기본 액션 생성자', () => {
      const testAction = factory('NORMAL')
      expect(testAction({
        attribute: 'testAttribute',
        longAttribute: 'testLongAttribute',
      })).toEqual(expect.objectContaining({
        type: 'NORMAL',
        payload: {
          attribute: 'testAttribute',
          longAttribute: 'testLongAttribute',
        },
      }))
    })

    it('타입을 가져올 수 있다', () => {
      const testAction = factory('NORMAL')
      expect(testAction.type).toEqual('NORMAL')
      expect(testAction.toString()).toEqual('NORMAL')
    })
  })

  describe('prefix가 있는 경우', () => {
    const factory = actionCreatorFactory('Test')

    it('기본 액션 생성자', () => {
      const testAction = factory('NORMAL')
      expect(testAction({
        attribute: 'testAttribute',
        longAttribute: 'testLongAttribute',
      })).toEqual(expect.objectContaining({
        type: 'Test/NORMAL',
        payload: {
          attribute: 'testAttribute',
          longAttribute: 'testLongAttribute',
        },
      }))
    })

    it('타입을 가져올 수 있다', () => {
      const testAction = factory('NORMAL')
      expect(testAction.type).toEqual('Test/NORMAL')
      expect(testAction.toString()).toEqual('Test/NORMAL')
    })

    describe('async', () => {
      const testActions = factory.async('ASYNC')

      it('REQUEST', () => {
        expect(testActions.request({
          attribute: 'testAttribute',
          longAttribute: 'testLongAttribute',
        })).toEqual(expect.objectContaining({
          type: 'Test/ASYNC_REQUEST',
          payload: {
            attribute: 'testAttribute',
            long_attribute: 'testLongAttribute',
          },
        }))
      })

      it('SUCCESS', () => {
        expect(testActions.success({
          attribute: 'testAttribute',
          long_attribute: 'testLongAttribute',
        })).toEqual(expect.objectContaining({
          type: 'Test/ASYNC_SUCCESS',
          payload: {
            attribute: 'testAttribute',
            longAttribute: 'testLongAttribute',
          },
        }))
      })

      it('FAILURE', () => {
        expect(testActions.failure({
          attribute: 'testAttribute',
          long_attribute: 'testLongAttribute',
        })).toEqual(expect.objectContaining({
          type: 'Test/ASYNC_FAILURE',
          payload: {
            attribute: 'testAttribute',
            longAttribute: 'testLongAttribute',
          },
        }))
      })
    })
  })
})

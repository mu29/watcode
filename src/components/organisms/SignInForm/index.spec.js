import React from 'react'
import SignInForm from '.'

const attributes = {
  isLoading: false,
  handleSubmit: jest.fn(),
}

const wrap = (props = attributes) => shallow(<SignInForm { ...props } />)

describe('<SignInForm />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })

  it('확인 버튼을 누르면 handleSubmit 함수를 호출한다', () => {
    attributes.handleSubmit.mockClear()
    const wrapper = wrap()
    expect(attributes.handleSubmit).not.toBeCalled()
    wrapper.simulate('submit')
    expect(attributes.handleSubmit).toBeCalled()
  })
})

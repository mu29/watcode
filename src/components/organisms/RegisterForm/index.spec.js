import React from 'react'
import { shallow } from 'enzyme'
import RegisterForm from '.'

const handleSubmit = jest.fn()

const wrap = (props = {}) => shallow(<RegisterForm handleSubmit={ handleSubmit } { ...props } />)

describe('<RegisterForm />', () => {
  it('확인 버튼을 누르면 handleSubmit 함수를 호출한다', () => {
    handleSubmit.mockClear()
    const wrapper = wrap()
    expect(handleSubmit).not.toBeCalled()
    wrapper.simulate('submit')
    expect(handleSubmit).toBeCalled()
  })

  it('폼 제출 중에는 버튼을 비활성화한다', () => {
    const wrapper = wrap()
    expect(wrapper.find({ disabled: true }).length).toBe(0)
    wrapper.setProps({ submitting: true })
    expect(wrapper.find({ disabled: true })).toHaveLength(1)
  })
})

import React from 'react'
import AuthForm from '.'

const wrap = (props = {}) => shallow(<AuthForm { ...props } />)

describe('<AuthForm />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })
})

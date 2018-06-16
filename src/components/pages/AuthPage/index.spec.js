import React from 'react'
import AuthPage from '.'

const wrap = (props = {}) => shallow(<AuthPage { ...props } />)

describe('<AuthPage />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })
})

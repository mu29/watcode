import React from 'react'
import Profile from '.'

const component = (props = {}) => withTheme(<Profile { ...props } />)

describe('<Profile />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })
})

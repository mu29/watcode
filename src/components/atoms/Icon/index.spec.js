import React from 'react'
import Icon from '.'

const component = (props = {}) => withTheme(<Icon { ...props } />)

describe('<Icon />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component({ icon: 'user' }))
    expect(wrapper).toMatchSnapshot()
  })
})

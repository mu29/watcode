import React from 'react'
import IconButton from '.'

const component = (props = {}) => withTheme(<IconButton { ...props } />)

describe('<IconButton />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component({ icon: 'user' }))
    expect(wrapper).toMatchSnapshot()
  })
})

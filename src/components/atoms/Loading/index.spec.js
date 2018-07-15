import React from 'react'
import Loading from '.'

const component = (props = {}) => withTheme(<Loading { ...props } />)

describe('<Loading />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })
})

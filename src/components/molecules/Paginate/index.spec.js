import React from 'react'
import Paginate from '.'

const component = (props = {}) => withTheme(<Paginate { ...props } />)

describe('<Paginate />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })
})

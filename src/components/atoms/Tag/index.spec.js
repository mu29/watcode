import React from 'react'
import Tag from '.'

const component = (props = {}) => withTheme(<Tag { ...props } />)

describe('<Tag />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })

  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = render(component({ children: 'test' }))
    expect(wrapper).toMatchSnapshot()
  })
})

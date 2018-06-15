import React from 'react'
import TabPage from '.'

const component = (props = {}) => withTheme(<TabPage { ...props } />)
const wrap = (props = {}) => shallow(component(props))

describe('<TabPage />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component({ name: 'title' }))
    expect(wrapper).toMatchSnapshot()
  })

  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = wrap({ children: 'test', name: 'title' })
    expect(wrapper).toMatchSnapshot()
  })
})

import React from 'react'
import Heading from '.'

const component = (props = {}) => withTheme(<Heading { ...props } />)
const wrap = (props = {}) => shallow(component(props)).dive()

describe('<Heading />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })

  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper).toMatchSnapshot()
  })

  it('임의의 속성이 들어온 경우 그려준다', () => {
    const wrapper = wrap({ name: 'foo' })
    expect(wrapper.props().name).toEqual('foo')
  })

  it('h1을 기본으로 그려준다', () => {
    const wrapper = wrap()
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  it('level 속성이 들어오면 hLevel 엘리먼트를 그려준다', () => {
    const wrapper = wrap({ level: 4 })
    expect(wrapper.find('h4')).toHaveLength(1)
  })

  it('fontSize 속성이 들어오면 해당 크기로 그려준다', () => {
    const wrapper = wrap({ fontSize: 16 })
    expect(wrapper).toMatchSnapshot()
  })
})

import React from 'react'
import Paragraph from '.'

const component = (props = {}) => withTheme(<Paragraph { ...props } />)
const wrap = (props = {}) => shallow(component(props)).dive()

describe('<Paragraph />', () => {
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

  it('기본으로 p 태그를 그려준다', () => {
    const wrapper = wrap()
    expect(wrapper.find('p')).toHaveLength(1)
  })
})

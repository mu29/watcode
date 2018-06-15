import React from 'react'
import Text from '.'

const component = (props = {}) => withTheme(<Text { ...props } />)
const wrap = (props = {}) => shallow(component(props)).dive()

describe('<Text />', () => {
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

  it('span 태그를 기본으로 그려준다', () => {
    const wrapper = wrap()
    expect(wrapper.find('span')).toHaveLength(1)
  })

  it('small 속성이 들어온 경우 smll 태그를 그려준다', () => {
    const wrapper = wrap({ small: true })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('small')).toHaveLength(1)
  })
})

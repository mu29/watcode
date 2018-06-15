import React from 'react'
import Input from '.'

const component = (props = {}) => withTheme(<Input { ...props } />)
const wrap = (props = {}) => shallow(component(props)).dive()

describe('<Input />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })

  it('임의의 속성이 들어온 경우 그려준다', () => {
    const wrapper = wrap({ name: 'foo' })
    expect(wrapper.props().name).toEqual('foo')
  })

  it('오류 메시지를 표시한다', () => {
    const wrapper = wrap({ error: 'foo error' })
    expect(wrapper).toMatchSnapshot()
  })

  it('기본으로 input 태그를 그려준다', () => {
    const wrapper = wrap()
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('type 속성이 textarea인 경우 textarea 태그를 그려준다', () => {
    const wrapper = wrap({ type: 'textarea' })
    expect(wrapper.find('textarea')).toHaveLength(1)
  })
})

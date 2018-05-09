import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import Input from '.'

const wrap = (props = {}) => shallow(<Input theme={ basicTheme } { ...props } />).dive()

describe('<Input />', () => {
  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('임의의 속성이 들어온 경우 그려준다', () => {
    const wrapper = wrap({ name: 'foo' })
    expect(wrapper.find({ name: 'foo' })).toHaveLength(1)
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

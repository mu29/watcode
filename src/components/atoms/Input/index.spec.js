import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import 'jest-styled-components'
import Input from '.'

const wrap = (props = {}) => shallow(<Input theme={ basicTheme } { ...props } />)

describe('<Input />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap().dive()
    expect(wrapper).toMatchSnapshot()
  })

  it('임의의 속성이 들어온 경우 그려준다', () => {
    const wrapper = wrap({ name: 'foo' })
    expect(wrapper.props().name).toEqual('foo')
  })

  it('오류 메시지를 표시한다', () => {
    const wrapper = wrap({ error: 'foo error' }).dive()
    expect(wrapper).toMatchSnapshot()
  })

  it('기본으로 input 태그를 그려준다', () => {
    const wrapper = wrap().dive()
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('type 속성이 textarea인 경우 textarea 태그를 그려준다', () => {
    const wrapper = wrap({ type: 'textarea' }).dive()
    expect(wrapper.find('textarea')).toHaveLength(1)
  })
})

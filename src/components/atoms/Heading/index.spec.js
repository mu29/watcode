import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import Heading from '.'

const wrap = (props = {}) => shallow(<Heading theme={ basicTheme } { ...props } />).dive()

describe('<Heading />', () => {
  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('임의의 속성이 들어온 경우 그려준다', () => {
    const wrapper = wrap({ name: 'foo' })
    expect(wrapper.find({ name: 'foo' })).toHaveLength(1)
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
    expect(wrapper.find({ fontSize: 16 })).toHaveLength(1)
  })
})

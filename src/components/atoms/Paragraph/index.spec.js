import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import Paragraph from '.'

const wrap = (props = {}) => shallow(<Paragraph theme={ basicTheme } { ...props } />).dive()

describe('<Paragraph />', () => {
  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('임의의 속성이 들어온 경우 그려준다', () => {
    const wrapper = wrap({ name: 'foo' })
    expect(wrapper.find({ name: 'foo' })).toHaveLength(1)
  })

  it('기본으로 p 태그를 그려준다', () => {
    const wrapper = wrap()
    expect(wrapper.find('p')).toHaveLength(1)
  })
})

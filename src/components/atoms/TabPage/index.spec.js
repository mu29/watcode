import React from 'react'
import { shallow } from 'enzyme'
import TabPage from '.'

const wrap = (props = {}) => shallow(<TabPage { ...props } />)

describe('<TabPage />', () => {
  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = wrap({ children: 'test', title: 'title' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('title 속성이 들어온 경우 그려준다', () => {
    const wrapper = wrap({ title: 'foo' })
    expect(wrapper.find({ title: 'foo' })).toHaveLength(1)
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import Label from '.'

const wrap = (props = {}) => shallow(<Label theme={ basicTheme } { ...props } />)

describe('<Label />', () => {
  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('임의의 속성이 들어온 경우 그려준다', () => {
    const wrapper = wrap({ htmlFor: 'foo' })
    expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
  })

  it('기본으로 label 태그를 그려준다', () => {
    const wrapper = wrap()
    expect(wrapper.find('label')).toHaveLength(1)
  })
})

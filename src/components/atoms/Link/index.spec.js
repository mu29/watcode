import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import Link from '.'

const wrap = (props = {}) => shallow(<Link theme={ basicTheme } { ...props } />)

describe('<Link />', () => {
  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('href 속성이 들어온 경우 anchor 태그를 그려준다', () => {
    const wrapper = wrap({ href: 'test' }).dive()
    expect(wrapper.find('a')).toHaveLength(1)
  })

  it('to 속성이 들어온 경우 Link 컴포넌트를 그려준다', () => {
    const wrapper = wrap({ to: 'test' }).dive()
    expect(wrapper.find('NavLink')).toHaveLength(1)
  })
})

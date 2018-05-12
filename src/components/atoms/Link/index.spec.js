import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import 'jest-styled-components'
import Link from '.'

const wrap = (props = { to: '/' }) => shallow(<Link theme={ basicTheme } { ...props } />).dive()

describe('<Link />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })

  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = wrap({ to: '/', children: 'test' })
    expect(wrapper).toMatchSnapshot()
  })

  it('href 속성이 들어온 경우 anchor 태그를 그려준다', () => {
    const wrapper = wrap({ href: 'test' })
    expect(wrapper.find('a')).toHaveLength(1)
  })

  it('to 속성이 들어온 경우 Link 컴포넌트를 그려준다', () => {
    const wrapper = wrap()
    expect(wrapper.find('NavLink')).toHaveLength(1)
  })
})

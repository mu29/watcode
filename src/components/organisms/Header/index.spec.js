import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'

const wrap = (props = { location: '/' }) => shallow(<Header { ...props } />).dive()

describe('<Header />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })

  it('5개의 메뉴를 가진다', () => {
    const wrapper = wrap()
    expect(wrapper.find('StyledIconButton')).toHaveLength(5)
    const firstMenu = wrapper.childAt(0).childAt(0).dive()
    expect(firstMenu).toMatchSnapshot()
    const lastMenu = wrapper.childAt(1).childAt(0).dive()
    expect(lastMenu).toMatchSnapshot()
  })

  it('커뮤니티 메뉴가 선택되어 있다', () => {
    const wrapper = wrap({ location: '/community' })
    expect(wrapper).toMatchSnapshot()
  })
})

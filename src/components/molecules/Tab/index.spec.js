import React from 'react'
import { TabPage } from 'components'
import Tab from '.'

const component = (props = {}) => withTheme((
  <Tab { ...props }>
    <TabPage name="title1" key="title1">탭 페이지 1</TabPage>
    <TabPage name="title2" key="title2">탭 페이지 2</TabPage>
  </Tab>
))
const wrap = (props = {}) => shallow(component(props))

describe('<Tab />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })

  it('자식 컴포넌트들의 제목을 그려준다', () => {
    const wrapper = wrap().dive()
    const firstTab = wrapper.childAt(0).childAt(0).dive()
    const secondTab = wrapper.childAt(0).childAt(1).dive()
    expect(firstTab.contains('title1')).toBe(true)
    expect(secondTab.contains('title2')).toBe(true)
  })

  it('기본적으로 첫 페이지를 표시한다', () => {
    const wrapper = wrap().dive()
    expect(wrapper.contains('탭 페이지 1')).toBe(true)
    expect(wrapper.contains('탭 페이지 2')).toBe(false)
  })

  it('선택되지 않은 탭을 누르면 해당 탭 페이지를 표시한다', () => {
    const wrapper = wrap()
    expect(wrapper.dive()).toMatchSnapshot()
    wrapper.find({ selected: false }).simulate('click')
    expect(wrapper.state('index')).toBe(1)
    expect(wrapper.dive()).toMatchSnapshot()
  })
})

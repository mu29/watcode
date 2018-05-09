import React from 'react'
import { shallow } from 'enzyme'
import { TabPage } from 'components'
import Tab from '.'

const wrap = (props = {}) => shallow(<Tab { ...props }><TabPage title="title1">탭 페이지 1</TabPage><TabPage title="title2">탭 페이지 2</TabPage></Tab>).dive()

describe('<Tab />', () => {
  it('자식 컴포넌트의 제목을 그려준다', () => {
    const wrapper = wrap()
    expect(wrapper.contains('title1')).toBe(true)
  })
})

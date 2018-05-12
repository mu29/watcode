import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import 'jest-styled-components'
import Field from '.'

const wrap = (props = {}) => shallow(<Field theme={ basicTheme } name="name" { ...props } />).dive()

describe('<Field />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })

  it('name 속성을 <Input /> id로 넘겨준다', () => {
    const wrapper = wrap()
    expect(wrapper.find({ id: 'name' })).toHaveLength(1)
  })

  it('label 속성이 들어오면 그려준다', () => {
    const wrapper = wrap({ label: 'foo label' })
    expect(wrapper).toMatchSnapshot()
  })

  it('오류 메시지를 표시한다', () => {
    const wrapper = wrap({ error: 'foo error' })
    expect(wrapper).toMatchSnapshot()
  })
})

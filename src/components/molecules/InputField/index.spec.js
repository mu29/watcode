import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import InputField from '.'

const wrap = (props = {}) => shallow(<InputField theme={ basicTheme } name="name" { ...props } />).dive()

describe('<InputField />', () => {
  it('name 속성을 그려준다', () => {
    const wrapper = wrap()
    expect(wrapper.find({ name: 'name' })).toHaveLength(1)
  })

  it('label 속성이 들어오면 그려준다', () => {
    const wrapper = wrap({ label: 'foo label' })
    expect(wrapper.contains('foo label')).toBe(true)
  })

  it('오류 메시지를 표시한다', () => {
    const wrapper = wrap({ error: 'foo error' })
    expect(wrapper.contains('foo error')).toBe(true)
  })
})

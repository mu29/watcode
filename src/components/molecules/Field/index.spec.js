import React from 'react'
import Field from '.'

const component = (props = {}) => withTheme(<Field name="name" { ...props } />)
const wrap = (props = {}) => shallow(component(props)).dive()

describe('<Field />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
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

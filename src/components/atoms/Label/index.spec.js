import React from 'react'
import Label from '.'

const component = (props = {}) => withTheme(<Label { ...props } />)
const wrap = (props = {}) => shallow(component(props))

describe('<Label />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })

  it('임의의 속성이 들어온 경우 그려준다', () => {
    const wrapper = wrap({ htmlFor: 'foo' })
    expect(wrapper.props().htmlFor).toEqual('foo')
  })

  it('기본으로 label 태그를 그려준다', () => {
    const wrapper = wrap()
    expect(wrapper.find('label')).toHaveLength(1)
  })
})

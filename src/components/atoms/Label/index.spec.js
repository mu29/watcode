import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import 'jest-styled-components'
import Label from '.'

const wrap = (props = {}) => shallow(<Label theme={ basicTheme } { ...props } />)

describe('<Label />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
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

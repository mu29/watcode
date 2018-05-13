import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import HomePage from '.'

const wrap = (props = {}) => shallow(<HomePage { ...props } />)

describe('<HomePage />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })
})

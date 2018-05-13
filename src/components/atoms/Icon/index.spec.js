import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import 'jest-styled-components'
import Icon from '.'

const wrap = (props = {}) => shallow(<Icon theme={ basicTheme } { ...props } />).dive()

describe('<Icon />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap({ icon: 'user' })
    expect(wrapper).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import 'jest-styled-components'
import IconButton from '.'

const wrap = (props = {}) => shallow(<IconButton theme={ basicTheme } { ...props } />).dive()

describe('<IconButton />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap({ icon: 'user' }).dive()
    expect(wrapper).toMatchSnapshot()
  })
})

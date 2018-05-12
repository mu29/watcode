import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import GenericTemplate from '.'

const wrap = (props = { header: 'header' }) => shallow(<GenericTemplate { ...props }>test</GenericTemplate>)

describe('<GenericTemplate />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })
})

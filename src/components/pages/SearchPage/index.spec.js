import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import SearchPage from '.'

const wrap = (props = {}) => shallow(<SearchPage { ...props } />)

describe('<SearchPage />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })
})

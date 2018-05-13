import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import BookmarkPage from '.'

const wrap = (props = {}) => shallow(<BookmarkPage { ...props } />)

describe('<BookmarkPage />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })
})

import React from 'react'
import SearchBar from '.'

const wrap = (props = {}) => shallow(<SearchBar { ...props } />)

describe('<SearchBar />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })
})

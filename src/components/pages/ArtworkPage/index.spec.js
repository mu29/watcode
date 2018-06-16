import React from 'react'
import ArtworkPage from '.'

const wrap = (props = {}) => shallow(<ArtworkPage match={{ params: { id: 1 } }} { ...props } />)

describe('<ArtworkPage />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })
})

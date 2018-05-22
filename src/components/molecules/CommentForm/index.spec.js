import React from 'react'
import CommentForm from '.'

const component = (props = {}) => withTheme(<CommentForm { ...props } />)

describe('<CommentForm />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })
})

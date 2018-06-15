import React from 'react'
import Button from '.'

const onClick = jest.fn()

const component = (props = {}) => withTheme(<Button onClick={ onClick } { ...props } />)

describe('<Button />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })

  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = render(component({ children: 'test' }))
    expect(wrapper).toMatchSnapshot()
  })

  it('임의의 속성이 들어온 경우 그려준다', () => {
    const wrapper = shallow(component({ name: 'foo' }))
    expect(wrapper.props().name).toEqual('foo')
  })

  it('기본적으로 button 태그를 그려준다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })

  it('href 속성이 들어온 경우 anchor 태그를 그려준다', () => {
    const wrapper = render(component({ href: 'test' }))
    expect(wrapper).toMatchSnapshot()
  })

  it('to 속성이 들어온 경우 Link 컴포넌트를 그려준다', () => {
    const wrapper = shallow(component({ to: 'test' })).dive().dive()
    expect(wrapper.find('Link')).toHaveLength(1)
  })

  it('누르면 onClick 함수를 호출한다', () => {
    onClick.mockClear()
    const wrapper = shallow(component())
    expect(onClick).not.toBeCalled()
    wrapper.simulate('click')
    expect(onClick).toBeCalled()
  })
})

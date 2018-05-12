import React from 'react'
import { shallow } from 'enzyme'
import { basicTheme } from 'components/themes'
import Button from '.'

const onClick = jest.fn()

const wrap = (props = {}) =>
  shallow(<Button theme={ basicTheme } onClick={ onClick } { ...props } />)

describe('<Button />', () => {
  it('자식 컴포넌트가 들어온 경우 그려준다', () => {
    const wrapper = wrap({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('임의의 속성이 들어온 경우 그려준다', () => {
    const wrapper = wrap({ name: 'foo' })
    expect(wrapper.prop('name')).toEqual('foo')
  })

  it('기본으로 button 태그를 그려준다', () => {
    const wrapper = wrap().dive()
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('href 속성이 들어온 경우 anchor 태그를 그려준다', () => {
    const wrapper = wrap({ href: 'test' }).dive()
    expect(wrapper.find('a')).toHaveLength(1)
  })

  it('to 속성이 들어온 경우 Link 컴포넌트를 그려준다', () => {
    const wrapper = wrap({ to: 'test' }).dive()
    expect(wrapper.find('Link')).toHaveLength(1)
  })

  it('누르면 onClick 함수를 호출한다', () => {
    onClick.mockClear()
    const wrapper = wrap()
    expect(onClick).not.toBeCalled()
    wrapper.simulate('click')
    expect(onClick).toBeCalled()
  })
})

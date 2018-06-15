import React from 'react'
import ReduxField from '.'

const meta = {
  touched: false,
  error: null,
}
const input = {
  name: 'test',
}

const component = (props = {}) => withTheme(<ReduxField { ...{ meta, input, ...props } } />)
const wrap = (props = {}) => shallow(component(props))

describe('<ReduxField />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })

  it('임의의 속성을 그려준다', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.props().id).toEqual('foo')
  })

  it('touched 되지 않았다면 오류를 표시하지 않는다', () => {
    const wrapper = wrap()
    expect(wrapper.find({ error: 'test' }).length).toBe(0)
    wrapper.setProps({ meta: { error: 'test' } })
    expect(wrapper.find({ error: 'test' }).length).toBe(0)
  })

  it('touched 되었고 오류가 있는 경우에 해당 오류를 표시한다', () => {
    const wrapper = wrap({ meta: { touched: true, error: 'test' } })
    expect(wrapper.find({ error: 'test' })).toHaveLength(1)
  })
})

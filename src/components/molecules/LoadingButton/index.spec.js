import React from 'react'
import LoadingButton from '.'

const component = (props = {}) => withTheme(<LoadingButton { ...props }>확인</LoadingButton>)
const wrap = (props = {}) => shallow(component(props)).dive()

describe('<LoadingButton />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component({ isLoading: true }))
    expect(wrapper).toMatchSnapshot()
  })

  it('로딩 중이 아니라면 자식 컴포넌트를 표시한다', () => {
    const wrapper = wrap({ isLoading: false })
    expect(wrapper).toMatchSnapshot()
  })
})

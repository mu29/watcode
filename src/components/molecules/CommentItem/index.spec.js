import React from 'react'
import CommentItem from '.'

const comment = {
  content: '달인급 캐릭터 분량 조절의 기술. 이 긴 영화에 지루함 한 톨 없다. 너는 어른이 다 됐더라, 피터',
  userAttributes: {
    name: '영화번역가 황석희',
  },
}

const component = (props = {}) => withTheme(<CommentItem comment={ comment } { ...props } />)

describe('<CommentItem />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })
})

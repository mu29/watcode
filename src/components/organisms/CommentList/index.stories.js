import React from 'react'
import { storiesOf } from '@storybook/react'
import CommentList from '.'

const comments = [{
  id: 1,
  author: '영화번역가 황석희',
  content: '달인급 캐릭터 분량 조절의 기술. 이 긴 영화에 지루함 한 톨 없다. 너는 어른이 다 됐더라, 피터',
}, {
  id: 2,
  author: '이동진',
  content: '마블의 모든 것을 쏟아부은 명작',
}, {
  id: 3,
  author: '뮤',
  content: '선발대 확인완료 돌격하라!!',
}]

storiesOf('Organisms/CommentList', module)
  .add('기본', () => (
    <CommentList list={ comments } />
  ))

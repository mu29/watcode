import React from 'react'
import { storiesOf } from '@storybook/react'
import CommentItem from '.'

const comment = {
  author: '영화번역가 황석희',
  content: '달인급 캐릭터 분량 조절의 기술. 이 긴 영화에 지루함 한 톨 없다. 너는 어른이 다 됐더라, 피터',
}

storiesOf('Organisms/CommentItem', module)
  .add('기본', () => (
    <CommentItem comment={ comment } />
  ))

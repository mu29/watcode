import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '.'

storiesOf('Atoms/Input', module)
  .add('기본', () => (
    <Input />
  ))
  .add('도움 텍스트', () => (
    <Input placeholder="메일 주소를 입력해주세요" />
  ))

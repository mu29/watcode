import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '.'

storiesOf('Atoms/Button', module)
  .add('기본', () => (
    <Button>확인</Button>
  ))
  .add('배경 색', () => (
    <Button backgroundColor="red.default">확인</Button>
  ))
  .add('테두리 색', () => (
    <Button color="gray.100" backgroundColor="white.default" border="red.default">확인</Button>
  ))
  .add('너비', () => (
    <Button width={ 144 }>확인</Button>
  ))
  .add('높이', () => (
    <Button height={ 72 }>확인</Button>
  ))
  .add('너비 + 높이', () => (
    <Button width={ 144 } height={ 72 }>확인</Button>
  ))
  .add('블록', () => (
    <Button block>확인</Button>
  ))
  .add('onClick', () => (
    <Button onClick={ action('button-click') }>확인</Button>
  ))

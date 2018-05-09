import React from 'react'
import { storiesOf } from '@storybook/react'
import { ReduxField } from 'components'

storiesOf('Organisms/ReduxField', module)
  .add('기본', () => (
    <ReduxField input={{ name: 'name' }} meta={{}} />
  ))
  .add('라벨', () => (
    <ReduxField input={{ name: 'name' }} label="이메일" meta={{}} />
  ))
  .add('오류', () => (
    <ReduxField input={{ name: 'name' }} label="이메일" meta={{ touched: true, error: '이메일 주소를 확인해주세요' }} />
  ))

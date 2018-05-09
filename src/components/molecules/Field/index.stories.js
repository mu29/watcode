import React from 'react'
import { storiesOf } from '@storybook/react'
import Field from '.'

storiesOf('Molecules/Field', module)
  .add('기본', () => (
    <Field name="field" placeholder="메일 주소를 입력해주세요" />
  ))
  .add('라벨', () => (
    <Field name="field" label="이메일" placeholder="메일 주소를 입력해주세요" />
  ))
  .add('오류', () => (
    <Field name="field" label="이메일" placeholder="메일 주소를 입력해주세요" error="존재하지 않는 계정입니다." />
  ))

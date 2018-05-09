import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from '.'

storiesOf('Atoms/Label', module)
  .add('기본', () => (
    <Label>비밀번호</Label>
  ))

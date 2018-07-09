import React from 'react'
import { storiesOf } from '@storybook/react'
import AuthForm from '.'

storiesOf('Organisms/AuthForm', module)
  .add('기본', () => (
    <AuthForm />
  ))

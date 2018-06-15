import React from 'react'
import { storiesOf } from '@storybook/react'
import { LoginForm } from 'containers'

storiesOf('Organisms/LoginForm', module)
  .add('기본', () => (
    <LoginForm />
  ))

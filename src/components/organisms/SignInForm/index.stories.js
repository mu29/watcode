import React from 'react'
import { storiesOf } from '@storybook/react'
import { SignInForm } from 'containers'

storiesOf('Organisms/SignInForm', module)
  .add('기본', () => (
    <SignInForm />
  ))

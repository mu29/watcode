import React from 'react'
import { storiesOf } from '@storybook/react'
import { SignUpForm } from 'containers'

storiesOf('Organisms/SignUpForm', module)
  .add('기본', () => (
    <SignUpForm />
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { RegisterForm } from 'containers'

storiesOf('Organisms/RegisterForm', module)
  .add('기본', () => (
    <RegisterForm />
  ))

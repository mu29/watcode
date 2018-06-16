import React from 'react'
import { storiesOf } from '@storybook/react'
import AuthPage from '.'

storiesOf('Pages/AuthPage', module)
  .add('기본', () => (
    <AuthPage />
  ))

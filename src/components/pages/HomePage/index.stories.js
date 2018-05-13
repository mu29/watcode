import React from 'react'
import { storiesOf } from '@storybook/react'
import HomePage from '.'

storiesOf('Pages/HomePage', module)
  .add('기본', () => (
    <HomePage />
  ))

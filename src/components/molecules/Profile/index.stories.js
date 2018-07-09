import React from 'react'
import { storiesOf } from '@storybook/react'
import Profile from '.'

storiesOf('Molecules/Profile', module)
  .add('기본', () => (
    <Profile />
  ))

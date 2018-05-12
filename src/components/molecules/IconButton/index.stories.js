import React from 'react'
import { storiesOf } from '@storybook/react'
import IconButton from '.'

storiesOf('Molecules/IconButton', module)
  .add('기본', () => (
    <IconButton icon="user" />
  ))

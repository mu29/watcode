import React from 'react'
import { storiesOf } from '@storybook/react'
import Loading from '.'

storiesOf('Atoms/Loading', module)
  .add('기본', () => (
    <Loading color="black" visible />
  ))

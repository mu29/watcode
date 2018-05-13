import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

storiesOf('Atoms/Icon', module)
  .add('기본', () => (
    <Icon icon="star" />
  ))

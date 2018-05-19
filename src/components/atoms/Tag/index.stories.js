import React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from '.'

storiesOf('Atoms/Tag', module)
  .add('기본', () => (
    <Tag>라노벨</Tag>
  ))

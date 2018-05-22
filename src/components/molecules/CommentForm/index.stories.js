import React from 'react'
import { storiesOf } from '@storybook/react'
import { CommentForm } from 'containers'

storiesOf('Molecules/CommentForm', module)
  .add('기본', () => (
    <CommentForm />
  ))

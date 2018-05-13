import React from 'react'
import { storiesOf } from '@storybook/react'
import BookmarkPage from '.'

storiesOf('Pages/BookmarkPage', module)
  .add('기본', () => (
    <BookmarkPage />
  ))

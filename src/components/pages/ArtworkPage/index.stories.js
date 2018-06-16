import React from 'react'
import { storiesOf } from '@storybook/react'
import ArtworkPage from '.'

storiesOf('Pages/ArtworkPage', module)
  .add('기본', () => (
    <ArtworkPage />
  ))

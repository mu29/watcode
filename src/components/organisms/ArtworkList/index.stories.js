import React from 'react'
import { storiesOf } from '@storybook/react'
import { ArtworkList } from 'containers'

storiesOf('Organisms/ArtworkList', module)
  .add('기본', () => (
    <ArtworkList />
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'
import ArtworkImage from '.'

storiesOf('Molecules/ArtworkImage', module)
  .add('기본', () => (
    <ArtworkImage id={ 112047 } url="https://laftelimage.blob.core.windows.net/items/thumbs/large/3390a970-59de-4d04-a705-6814d2f2446a.jpg" />
  ))

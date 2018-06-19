import React from 'react'
import { storiesOf } from '@storybook/react'
import ArtworkView from '.'

const artwork = {
  code: 112047,
  artist: 'nagatsuki taffee',
  title: 'Re: 제로부터 시작하는 이세계 생활',
  type: 'Light Novel',
  tags: ['rebirth', 'loop', 'harem', 'this is a long tag'],
  imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/3390a970-59de-4d04-a705-6814d2f2446a.jpg',
}

storiesOf('Organisms/ArtworkView', module)
  .add('기본', () => (
    <ArtworkView artwork={ artwork } />
  ))
  .add('이미지 보이기', () => (
    <ArtworkView artwork={ artwork } showImage />
  ))

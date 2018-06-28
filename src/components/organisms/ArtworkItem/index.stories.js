import React from 'react'
import { storiesOf } from '@storybook/react'
import ArtworkItem from '.'

const artwork = {
  code: 1120470,
  artist: 'nagatsuki taffee',
  title: 'Re: 제로부터 시작하는 이세계 생활',
  type: 'Light Novel',
  tags: ['rebirth', 'loop', 'harem', 'this is a long tag'],
  imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/395db1d0-ead8-407f-a316-04aee1e668a7.jpg',
}

storiesOf('Organisms/ArtworkItem', module)
  .add('기본', () => (
    <ArtworkItem artwork={ artwork } />
  ))

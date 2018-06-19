import React from 'react'
import ArtworkItem from '.'

const artwork = {
  code: 112047,
  artist: 'nagatsuki taffee',
  title: 'Re: 제로부터 시작하는 이세계 생활',
  tags: ['rebirth', 'loop', 'harem', 'this is a long tag'],
  imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/395db1d0-ead8-407f-a316-04aee1e668a7.jpg',
}

const component = (props = {}) => withTheme(<ArtworkItem artwork={ artwork } { ...props } />)

describe('<ArtworkItem />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })
})

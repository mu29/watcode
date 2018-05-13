import React from 'react'
import { mount } from 'enzyme'
import { basicTheme } from 'components/themes'
import 'jest-styled-components'
import ArtworkItem from '.'

const artwork = {
  code: 112047,
  artist: 'nagatsuki taffee',
  title: 'Re: 제로부터 시작하는 이세계 생활',
  tags: ['rebirth', 'loop', 'harem', 'this is a long tag'],
  imageUrl: 'https://cdn.namuwikiusercontent.com/s/3f75b87a3b69db1af44479a12315ed58c7e6121c2842cf929209cbf74fa23b7b214a9124e7e494f6ffc8312bdcf231d53278bdf5e7330fb8b23c59ac2ebaf299a3775c6479795372d4b4be0533d58d63?e=1535506665&k=FZxNDPx_iAUdg9ZFqsqXGg',
}

const wrap = (props = {}) => mount((
  <ArtworkItem
    theme={ basicTheme }
    artwork={ artwork }
    { ...props }
  />
))

describe('<ArtworkItem />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })

  it('이미지를 표시한다', () => {
    const wrapper = wrap({ showImage: true })
    expect(wrapper).toMatchSnapshot()
  })
})
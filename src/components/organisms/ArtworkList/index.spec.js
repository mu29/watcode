import React from 'react'
import ArtworkList from '.'

const artworks = [{
  code: 112047,
  artist: 'nagatsuki taffee',
  title: 'Re: 제로부터 시작하는 이세계 생활',
  tags: ['rebirth', 'loop', 'harem', 'this is a long tag'],
  imageUrl: 'https://cdn.namuwikiusercontent.com/s/3f75b87a3b69db1af44479a12315ed58c7e6121c2842cf929209cbf74fa23b7b214a9124e7e494f6ffc8312bdcf231d53278bdf5e7330fb8b23c59ac2ebaf299a3775c6479795372d4b4be0533d58d63?e=1535506665&k=FZxNDPx_iAUdg9ZFqsqXGg',
}, {
  code: 442040,
  artist: 'jihyung lee',
  title: '소드 아트 온라인 프로그레시브',
  tags: ['sword', 'art', 'online', 'progressive', 'light novel', 'sword art online progressive'],
  imageUrl: 'https://cdn.namuwikiusercontent.com/s/11dff86670c3bfad461410c1873d96cb1e9f1212af22b34cb095a9e0515eb8f567132e024ba8c5b4c6da559024c17abad7f825badb96f1b0b3e1ca759b8735085f34802d94f5114a40e016de3f20c4da?e=1529862330&k=mloh6JRrk1DCGU256R6W7g',
}, {
  code: 863342,
  artist: 'yunjae',
  title: '슈타인즈 게이트',
  tags: ['hmm', 'there', 'are', 'a log', 'of', 'tags', 'isnt', 'it funny'],
  imageUrl: 'https://cdn.namuwikiusercontent.com/s/6d15a8c566a72ec6dc9788bb5e412aa491780d82053d9c4f5b196ce0e9c71c4a8b65286f09ac8e5fe8d18e3d108a3376dae42976008b9c3eb9e495e03baa2c502f6918b821109112150921d94cade965?e=1530728304&k=NMvJ79h92uY0MlHZJgdJyg',
}]

const component = (props = {}) => withTheme(<ArtworkList list={ artworks } { ...props } />)
const wrap = (props = {}) => shallow(component(props)).dive()

describe('<ArtworkList />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })

  it('3개의 아이템을 그려준다', () => {
    const wrapper = wrap()
    expect(wrapper.find('StyledArtworkItem')).toHaveLength(3)
    const firstItem = wrapper.childAt(0).dive().dive()
    expect(firstItem).toMatchSnapshot()
  })
})

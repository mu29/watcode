import React from 'react'
import { connect } from 'react-redux'
import { ArtworkList } from 'components'

const ArtworkListContainer = props => <ArtworkList { ...props } />

const mapStateToProps = () => ({
  list: [{
    id: 112047,
    artist: 'nagatsuki taffee',
    title: 'Re: 제로부터 시작하는 이세계 생활',
    type: 'Light Novel',
    tags: ['rebirth', 'loop', 'harem', 'this is a long tag'],
    imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/395db1d0-ead8-407f-a316-04aee1e668a7.jpg',
    stars: 172,
    comments: 13,
    views: 8232,
  }, {
    id: 242040,
    artist: 'jihyung lee',
    title: '소드 아트 온라인 프로그레시브',
    type: 'Animation',
    tags: ['sword', 'art', 'online', 'progressive', 'light novel', 'sword art online progressive'],
    imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/3390a970-59de-4d04-a705-6814d2f2446a.jpg',
    stars: 17,
    comments: 3,
    views: 122,
  }, {
    id: 363342,
    artist: 'yunjae',
    title: '슈타인즈 게이트',
    type: 'Console Game',
    tags: ['hmm', 'there', 'are', 'a log', 'of', 'tags', 'isnt', 'it funny'],
    imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/4d3a4b53-ab3c-4314-9411-cb9e7e87f08c.jpg',
    stars: 1732,
    comments: 513,
    views: 86232,
  }, {
    id: 412047,
    artist: 'nagatsuki taffee',
    title: 'Re: 제로부터 시작하는 이세계 생활',
    type: 'Light Novel',
    tags: ['rebirth', 'loop', 'harem', 'this is a long tag'],
    imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/395db1d0-ead8-407f-a316-04aee1e668a7.jpg',
    stars: 172,
    comments: 13,
    views: 8232,
  }, {
    id: 542040,
    artist: 'jihyung lee',
    title: '소드 아트 온라인 프로그레시브',
    type: 'Animation',
    tags: ['sword', 'art', 'online', 'progressive', 'light novel', 'sword art online progressive'],
    imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/3390a970-59de-4d04-a705-6814d2f2446a.jpg',
    stars: 17,
    comments: 3,
    views: 122,
  }, {
    id: 663342,
    artist: 'yunjae',
    title: '슈타인즈 게이트',
    type: 'Console Game',
    tags: ['hmm', 'there', 'are', 'a log', 'of', 'tags', 'isnt', 'it funny'],
    imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/4d3a4b53-ab3c-4314-9411-cb9e7e87f08c.jpg',
    stars: 1732,
    comments: 513,
    views: 86232,
  }, {
    id: 712047,
    artist: 'nagatsuki taffee',
    title: 'Re: 제로부터 시작하는 이세계 생활',
    type: 'Light Novel',
    tags: ['rebirth', 'loop', 'harem', 'this is a long tag'],
    imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/395db1d0-ead8-407f-a316-04aee1e668a7.jpg',
  }, {
    id: 842040,
    artist: 'jihyung lee',
    title: '소드 아트 온라인 프로그레시브',
    type: 'Animation',
    tags: ['sword', 'art', 'online', 'progressive', 'light novel', 'sword art online progressive'],
    imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/3390a970-59de-4d04-a705-6814d2f2446a.jpg',
  }, {
    id: 963342,
    artist: 'yunjae',
    title: '슈타인즈 게이트',
    type: 'Console Game',
    tags: ['hmm', 'there', 'are', 'a log', 'of', 'tags', 'isnt', 'it funny'],
    imageUrl: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/4d3a4b53-ab3c-4314-9411-cb9e7e87f08c.jpg',
  }],
})

const mapDispatchToProps = () => ({
  onPaginate: () => {},
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkListContainer)

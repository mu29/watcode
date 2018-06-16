import {
  HomePage,
  RankingPage,
  BookmarkPage,
  ArtworkPage,
} from 'components'

const routes = [{
  path: '/',
  exact: true,
  component: HomePage,
}, {
  path: '/ranking',
  exact: true,
  component: RankingPage,
}, {
  path: '/bookmarks',
  exact: true,
  component: BookmarkPage,
}, {
  path: '/artworks/:id',
  exact: true,
  component: ArtworkPage,
}]

export default routes

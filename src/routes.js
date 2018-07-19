import {
  HomePage,
  BookmarkPage,
  CommunityPage,
  ArtworkPage,
  AuthPage,
  SearchPage,
} from 'components'

const routes = [{
  path: '/',
  exact: true,
  component: HomePage,
}, {
  path: '/bookmarks',
  exact: true,
  component: BookmarkPage,
}, {
  path: '/community',
  exact: true,
  component: CommunityPage,
}, {
  path: '/artworks/:id',
  exact: true,
  component: ArtworkPage,
}, {
  path: '/auth',
  exact: true,
  component: AuthPage,
}, {
  path: '/search',
  component: SearchPage,
}]

export default routes

import {
  HomePage,
  RankingPage,
  BookmarkPage,
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
}]

export default routes

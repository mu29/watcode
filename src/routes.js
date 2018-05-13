import {
  HomePage,
  RankingPage,
} from 'components'

const routes = [{
  path: '/',
  exact: true,
  component: HomePage,
}, {
  path: '/ranking',
  exact: true,
  component: RankingPage,
}]

export default routes

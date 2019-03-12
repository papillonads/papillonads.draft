import HomePage from '../pattern/page/HomePage'
import NotFoundPage from '../pattern/page/NotFoundPage'
import { homePagePath } from './path'

export const homePageRoute = {
  path: homePagePath,
  exact: true,
  component: HomePage,
}

export const notFoundPageRoute = {
  component: NotFoundPage,
}

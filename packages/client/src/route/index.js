import AsyncStartPage from '../pattern/page/StartPage'
import AsyncNotFoundPage from '../pattern/page/NotFoundPage'
import { startPagePath } from './path'

export const startPageRoute = {
  path: startPagePath,
  exact: true,
  component: AsyncStartPage,
}

export const notFoundPageRoute = {
  component: AsyncNotFoundPage,
}

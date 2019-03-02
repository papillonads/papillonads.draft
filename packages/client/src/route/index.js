import StartPage from '../pattern/page/StartPage'
import NotFoundPage from '../pattern/page/NotFoundPage'
import { startPagePath } from './path'

export const startPageRoute = {
  path: startPagePath,
  exact: true,
  component: StartPage,
}

export const notFoundPageRoute = {
  component: NotFoundPage,
}

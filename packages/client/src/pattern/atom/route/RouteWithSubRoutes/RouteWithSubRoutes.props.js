import { string } from 'prop-types'
import { shape, bool, node, arrayOf } from 'prop-types'

export const routeWithSubRoutesPropTypes = {
  route: shape({
    path: string.isRequired,
    exact: bool.isRequired,
    component: node.isRequired,
    routes: arrayOf(
      shape({
        path: string.isRequired,
        exact: bool.isRequired,
        component: node.isRequired,
      }),
    ),
  }),
}

import { shape } from 'prop-types'
import { linksPropTypes } from '../Links/Links.props'

export const navigationBarPropTypes = shape({
  links: linksPropTypes.data,
}).isRequired

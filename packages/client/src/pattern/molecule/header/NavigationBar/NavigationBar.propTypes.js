import { shape } from 'prop-types'
import { linksPropTypes } from '../Links/Links.propTypes'

export const navigationBarPropTypes = shape({
  links: linksPropTypes,
}).isRequired

import { shape } from 'prop-types'
import { linksShape } from '../Links/Links.shape'

export const navigationBarShape = shape({
  links: linksShape.isRequired,
})

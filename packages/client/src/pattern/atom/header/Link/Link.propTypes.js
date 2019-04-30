import { string, shape } from 'prop-types'

export const linkPropTypes = shape({
  text: string.isRequired,
}).isRequired

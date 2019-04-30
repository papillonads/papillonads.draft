import { string, shape } from 'prop-types'

export const linkShape = shape({
  text: string.isRequired,
})

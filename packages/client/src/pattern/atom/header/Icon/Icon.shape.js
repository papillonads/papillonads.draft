import { shape, string, number } from 'prop-types'

export const iconShape = shape({
  className: string,
  name: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  fill: string,
})

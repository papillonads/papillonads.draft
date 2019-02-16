import { shape, string, number } from 'prop-types'

export const svgIconShape = shape({
  className: string,
  name: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  fill: string,
})

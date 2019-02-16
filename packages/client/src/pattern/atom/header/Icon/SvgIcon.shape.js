import { shape, arrayOf, string, number } from 'prop-types'

export const svgIconShape = shape({
  className: string,
  name: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  fill: string,
})

export const svgIconGroupShape = shape({
  className: string,
  name: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  viewBox: string.isRequired,
  pathProps: arrayOf(
    shape({
      fill: string,
    }),
  ).isRequired,
})

import { shape, arrayOf, string, number } from 'prop-types'

export const svgIconPropTypes = shape({
  className: string,
  name: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  fill: string,
}).isRequired

export const svgIconGroupPropTypes = shape({
  className: string,
  name: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  fill: string,
  viewBox: string.isRequired,
  pathProps: arrayOf(
    shape({
      fill: string,
    }),
  ).isRequired,
}).isRequired

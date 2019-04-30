import { shape, arrayOf, string, number } from 'prop-types'

export const svgIconDefaultProps = {
  className: '',
  fill: '',
}

export const svgIconPropTypes = {
  className: string,
  name: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  fill: string,
}

export const svgIconGroupDefaultProps = {
  className: '',
}

export const svgIconGroupPropTypes = {
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
}

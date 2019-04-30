import { shape, arrayOf, string } from 'prop-types'

export const dropdownDefaultProps = {
  className: '',
}

export const dropdownPropTypes = {
  className: string,
  items: arrayOf(
    shape({
      text: string.isRequired,
    }),
  ).isRequired,
}

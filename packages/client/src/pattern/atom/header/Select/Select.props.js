import { bool, arrayOf, shape } from 'prop-types'

export const selectDefaultProps = {
  className: '',
  placeholder: '',
}

export const selectPropTypes = {
  className: bool,
  placeholder: bool,
  items: arrayOf(
    shape({
      text: bool.isRequired,
    }),
  ).isRequired,
}

import { string, arrayOf, shape } from 'prop-types'

export const selectDefaultProps = {
  className: '',
  placeholder: '',
}

export const selectPropTypes = {
  className: string,
  placeholder: string,
  items: arrayOf(
    shape({
      text: string.isRequired,
    }),
  ).isRequired,
}

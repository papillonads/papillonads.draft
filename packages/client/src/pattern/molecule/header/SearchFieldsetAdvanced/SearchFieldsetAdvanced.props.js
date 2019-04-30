import { shape, arrayOf, string } from 'prop-types'

const selectOptionShape = shape({
  label: string.isRequired,
  value: string.isRequired,
})

export const searchFieldsetAdvancedDefaultProps = {
  className: '',
}

export const searchFieldsetAdvancedPropTypes = {
  className: string,
  data: shape({
    categories: arrayOf(selectOptionShape).isRequired,
    distances: arrayOf(selectOptionShape).isRequired,
  }).isRequired,
}

import { shape, arrayOf, string } from 'prop-types'

const selectOptionShape = shape({
  label: string.isRequired,
  value: string.isRequired,
})

export const searchFieldsetAdvancedPropTypes = shape({
  categories: arrayOf(selectOptionShape).isRequired,
  distances: arrayOf(selectOptionShape).isRequired,
}).isRequired

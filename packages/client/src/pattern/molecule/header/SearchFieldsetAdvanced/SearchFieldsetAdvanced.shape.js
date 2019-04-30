import { shape, arrayOf, string } from 'prop-types'

const selectOptionShape = shape({
  label: string.isRequired,
  value: string.isRequired,
})

export const searchFieldsetAdvancedShape = shape({
  categories: arrayOf(selectOptionShape).isRequired,
  distances: arrayOf(selectOptionShape).isRequired,
})

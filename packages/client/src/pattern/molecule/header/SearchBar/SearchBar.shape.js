import { shape } from 'prop-types'
import { searchFieldsetAdvancedShape } from '../SearchFieldsetAdvanced/SearchFieldsetAdvanced.shape'

export const searchBarShape = shape({
  searchFieldsetAdvanced: searchFieldsetAdvancedShape.isRequired,
})

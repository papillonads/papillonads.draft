import { shape } from 'prop-types'
import { searchFieldsetAdvancedPropTypes } from '../SearchFieldsetAdvanced/SearchFieldsetAdvanced.propTypes'

export const searchBarPropTypes = shape({
  searchFieldsetAdvanced: searchFieldsetAdvancedPropTypes,
}).isRequired

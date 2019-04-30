import { string, shape } from 'prop-types'
import { searchFieldsetAdvancedPropTypes } from '../SearchFieldsetAdvanced/SearchFieldsetAdvanced.propTypes'

export const searchBarDefaultProps = {
  className: '',
}

export const searchBarPropTypes = {
  className: string,
  data: shape({
    searchFieldsetAdvanced: searchFieldsetAdvancedPropTypes,
  }).isRequired,
}

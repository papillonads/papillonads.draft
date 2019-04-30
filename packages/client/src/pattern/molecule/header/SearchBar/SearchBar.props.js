import { string, shape } from 'prop-types'
import { searchFieldsetAdvancedPropTypes } from '../SearchFieldsetAdvanced/SearchFieldsetAdvanced.props'

export const searchBarDefaultProps = {
  className: '',
}

export const searchBarPropTypes = {
  className: string,
  data: shape({
    searchFieldsetAdvanced: searchFieldsetAdvancedPropTypes.data,
  }).isRequired,
}

import { string, shape } from 'prop-types'
import { navigationBarPropTypes } from '../../../molecule/header/NavigationBar/NavigationBar.props'
import { searchBarPropTypes } from '../../../molecule/header/SearchBar/SearchBar.propTypes'

export const headerDefaultProps = {
  className: '',
}

export const headerPropTypes = {
  className: string,
  data: shape({
    navigationBar: navigationBarPropTypes.data,
    searchBar: searchBarPropTypes,
  }).isRequired,
}

import { shape } from 'prop-types'
import { navigationBarPropTypes } from '../../../molecule/header/NavigationBar/NavigationBar.propTypes'
import { searchBarPropTypes } from '../../../molecule/header/SearchBar/SearchBar.propTypes'

export const headerPropTypes = shape({
  navigationBar: navigationBarPropTypes,
  searchBar: searchBarPropTypes,
}).isRequired

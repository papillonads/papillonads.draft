import { shape } from 'prop-types'
import { navigationBarShape } from '../../../molecule/header/NavigationBar/NavigationBar.shape'
import { searchBarShape } from '../../../molecule/header/SearchBar/SearchBar.shape'

export const headerShape = shape({
  navigationBar: navigationBarShape.isRequired,
  searchBar: searchBarShape.isRequired,
})

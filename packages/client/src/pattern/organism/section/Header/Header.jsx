import React from 'react'
import { string, object } from 'prop-types'
import cn from 'classnames'
import cs from './Header.scss'
import NavigationBar from '../../../molecule/header/NavigationBar'
import SearchBar from '../../../molecule/header/SearchBar'

const Header = ({ className, data }) => {
  const headerClassList = cn(className, cs.header)

  return (
    <div className={headerClassList}>
      <NavigationBar data={data.navigationBar} className={cs.header__navigationBar} />
      <SearchBar data={data.searchBar} className={cs.header__searchBar} />
    </div>
  )
}

Header.defaultProps = {
  className: '',
}

Header.propTypes = {
  className: string,
  data: object.isRequired,
}.isRequired

export default Header

import React from 'react'
import { shape, string } from 'prop-types'
import cn from 'classnames'
import styles from './Header.scss'
import NavigationBar from '../../../molecule/header/NavigationBar/NavigationBar'
import SearchBar from '../../../molecule/header/SearchBar/SearchBar'

const Header = ({ className }) => {
  const headerClassList = cn(className, styles.header)

  return (
    <div className={headerClassList}>
      <NavigationBar className={styles.navigationBar} />
      <SearchBar className={styles.searchBar} />
    </div>
  )
}

Header.defaultProps = {
  className: '',
}

Header.propTypes = shape({
  className: string,
}).isRequired

export default Header

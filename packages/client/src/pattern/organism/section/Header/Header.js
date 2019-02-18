import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './Header.scss'
import NavigationBar from '../../../molecule/header/NavigationBar'
import SearchBar from '../../../molecule/header/SearchBar'

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

Header.propTypes = {
  className: string,
}.isRequired

export default Header

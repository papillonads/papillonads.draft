import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './Dropdown.scss'

const Dropdown = ({ className }) => {
  const dropdownClassList = cn(className, styles.dropdown)

  return <div className={dropdownClassList}>Dropdown</div>
}

Dropdown.defaultProps = {
  className: '',
}

Dropdown.propTypes = {
  className: string,
}.isRequired

export default Dropdown

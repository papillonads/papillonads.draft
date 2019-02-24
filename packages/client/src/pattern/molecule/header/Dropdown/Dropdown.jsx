import React from 'react'
import { shape, arrayOf, string } from 'prop-types'
import cn from 'classnames'
import styles from './Dropdown.scss'
import Label from '../../../atom/header/Label'
import uuidv1 from 'uuid/v1'

const Dropdown = ({ className, items }) => {
  const dropdownClassList = cn(className, styles.dropdown)

  return (
    <div className={dropdownClassList}>
      {items.map(item => (
        <Label key={uuidv1()} text={item.text} />
      ))}
    </div>
  )
}

Dropdown.defaultProps = {
  className: '',
}

Dropdown.propTypes = {
  className: string,
  items: arrayOf(
    shape({
      text: string.isRequired,
    }),
  ).isRequired,
}.isRequired

export default Dropdown

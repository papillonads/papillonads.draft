import React from 'react'
import { shape, arrayOf, string } from 'prop-types'
import cn from 'classnames'
import cs from './Select.scss'
import uuidv1 from 'uuid/v1'

const Select = ({ className, items }) => {
  const selectClassList = cn(className, cs.button)

  return (
    <select className={selectClassList}>
      {items.map(item => (
        <option key={uuidv1()} text={item.text} />
      ))}
    </select>
  )
}

Select.defaultProps = {
  className: '',
}

Select.propTypes = {
  className: string,
  items: arrayOf(
    shape({
      text: string.isRequired,
    }),
  ).isRequired,
}.isRequired

export default Select

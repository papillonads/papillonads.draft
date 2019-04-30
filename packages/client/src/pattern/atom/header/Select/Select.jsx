import React from 'react'
import { shape, arrayOf, string } from 'prop-types'
import cn from 'classnames'
import cs from './Select.scss'
import uuidv1 from 'uuid/v1'

const Select = ({ className, placeholder, items }) => {
  const selectClassList = cn(className, cs.select)

  return (
    <React.Fragment>
      <select className={selectClassList}>
        <option className={cs.select__option} key={uuidv1()} value={placeholder}>
          {placeholder}
        </option>
        {items.map(item => (
          <option key={uuidv1()} value={item.text}>
            {item.text}
          </option>
        ))}
      </select>
    </React.Fragment>
  )
}

Select.defaultProps = {
  className: '',
  placeholder: '',
}

Select.propTypes = {
  className: string,
  placeholder: string,
  items: arrayOf(
    shape({
      text: string.isRequired,
    }),
  ).isRequired,
}

export default Select

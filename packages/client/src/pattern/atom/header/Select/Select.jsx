import React from 'react'
import cn from 'classnames'
import cs from './Select.scss'
import uuidv1 from 'uuid/v1'
import { selectDefaultProps, selectPropTypes } from './Select.props'

const Select = ({ className, placeholder, items }) => {
  const selectClassList = cn(className, cs.select)

  return (
    <React.Fragment>
      <select className={selectClassList}>
        <option className={cs.selectOption} key={uuidv1()} value={placeholder}>
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

Select.defaultProps = selectDefaultProps

Select.propTypes = selectPropTypes

export default Select

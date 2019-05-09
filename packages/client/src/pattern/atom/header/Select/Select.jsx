import React from 'react'
import uuidv1 from 'uuid/v1'
import { selectDefaultProps, selectPropTypes } from './Select.props'

const Select = ({ className, placeholder, items }) => (
  <React.Fragment>
    <select className={className}>
      <option key={uuidv1()} value={placeholder}>
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

Select.defaultProps = selectDefaultProps

Select.propTypes = selectPropTypes

export default Select

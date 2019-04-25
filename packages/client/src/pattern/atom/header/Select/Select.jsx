import React from 'react'
import { string, node } from 'prop-types'
import cn from 'classnames'
import cs from './Select.scss'

const Select = ({ className, children }) => {
  const selectClassList = cn(className, cs.button)

  return <div className={selectClassList}>{children}</div>
}

Select.defaultProps = {
  className: '',
}

Select.propTypes = {
  className: string,
  children: node.isRequired,
}.isRequired

export default Select

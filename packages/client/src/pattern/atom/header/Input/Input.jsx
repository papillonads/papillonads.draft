import React from 'react'
import cn from 'classnames'
import { inputDefaultProps, inputPropTypes } from './Input.props'

const Input = ({ className, placeholder }) => {
  const inputClassList = cn(className)

  return <input className={inputClassList} placeholder={placeholder} />
}

Input.defaultProps = inputDefaultProps

Input.propTypes = inputPropTypes

export default Input

import React from 'react'
import { inputDefaultProps, inputPropTypes } from './Input.props'

export function Input({ className, placeholder }) {
  return <input className={className} placeholder={placeholder} />
}

Input.defaultProps = inputDefaultProps

Input.propTypes = inputPropTypes

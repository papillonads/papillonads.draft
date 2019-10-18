import React from 'react'
import { inputDefaultProps, inputPropTypes } from './Input.props'

export const Input = ({ className, placeholder }) => <input className={className} placeholder={placeholder} />

Input.defaultProps = inputDefaultProps

Input.propTypes = inputPropTypes

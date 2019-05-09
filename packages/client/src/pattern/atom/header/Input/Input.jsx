import React from 'react'
import { inputDefaultProps, inputPropTypes } from './Input.props'

const Input = ({ className, placeholder }) => <input className={className} placeholder={placeholder} />

Input.defaultProps = inputDefaultProps

Input.propTypes = inputPropTypes

export default Input

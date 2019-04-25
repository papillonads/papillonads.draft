import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './Input.scss'

const Input = ({ className, placeholder }) => {
  const inputClassList = cn(className, styles.input)

  return <input className={inputClassList} placeholder={placeholder} />
}

Input.defaultProps = {
  className: '',
  placeholder: '',
}

Input.propTypes = {
  className: string,
  placeholder: string,
}.isRequired

export default Input

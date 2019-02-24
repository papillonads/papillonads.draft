import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './Input.scss'

const Input = ({ className }) => {
  const inputClassList = cn(className, styles.input)

  return <div className={inputClassList}>Input</div>
}

Input.defaultProps = {
  className: '',
}

Input.propTypes = {
  className: string,
}.isRequired

export default Input

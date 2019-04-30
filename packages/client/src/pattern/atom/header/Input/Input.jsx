import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'

const Input = ({ className, placeholder }) => {
  const inputClassList = cn(className)

  return <input className={inputClassList} placeholder={placeholder} />
}

Input.defaultProps = {
  className: '',
  placeholder: '',
}

Input.propTypes = {
  className: string,
  placeholder: string,
}

export default Input

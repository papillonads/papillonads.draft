import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './Label.scss'

const Label = ({ className, text }) => {
  const labelClassList = cn(className, styles.label)

  return <div className={labelClassList}>{text}</div>
}

Label.defaultProps = {
  className: '',
}

Label.propTypes = {
  className: string,
}.isRequired

export default Label

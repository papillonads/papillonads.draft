import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './Ribbon.scss'

const Ribbon = ({ className }) => {
  const ribbonClassList = cn(className, styles.ribbon)

  return <div className={ribbonClassList}>Ribbon</div>
}

Ribbon.defaultProps = {
  className: '',
}

Ribbon.propTypes = {
  className: string,
}.isRequired

export default Ribbon

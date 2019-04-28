import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './Ribbon.scss'

const Ribbon = ({ className }) => {
  const ribbonClassList = cn(className, cs.ribbon)

  return <div className={ribbonClassList} />
}

Ribbon.defaultProps = {
  className: '',
}

Ribbon.propTypes = {
  className: string,
}.isRequired

export default Ribbon

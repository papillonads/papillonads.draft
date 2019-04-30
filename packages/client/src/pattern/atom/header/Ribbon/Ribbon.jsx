import React from 'react'
import cn from 'classnames'
import { ribbonDefaultProps, ribbonPropTypes } from './Ribbon.props'

const Ribbon = ({ className }) => {
  const ribbonClassList = cn(className)

  return <div className={ribbonClassList} />
}

Ribbon.defaultProps = ribbonDefaultProps

Ribbon.propTypes = ribbonPropTypes

export default Ribbon

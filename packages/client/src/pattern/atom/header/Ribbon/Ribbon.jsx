import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'

const Ribbon = ({ className }) => {
  const ribbonClassList = cn(className)

  return <div className={ribbonClassList} />
}

Ribbon.defaultProps = {
  className: '',
}

Ribbon.propTypes = {
  className: string,
}

export default Ribbon

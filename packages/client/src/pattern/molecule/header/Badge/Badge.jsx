import React from 'react'
import { string, node } from 'prop-types'
import cn from 'classnames'

const Badge = ({ className, children }) => {
  const badgeClassList = cn(className)

  return <div className={badgeClassList}>{children}</div>
}

Badge.defaultProps = {
  className: '',
}

Badge.propTypes = {
  className: string,
  children: node.isRequired,
}

export default Badge

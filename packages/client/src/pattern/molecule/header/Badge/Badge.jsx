import React from 'react'
import cn from 'classnames'
import { badgeDefaultProps, badgePropTypes } from './badge.props'

const Badge = ({ className, children }) => {
  const badgeClassList = cn(className)

  return <div className={badgeClassList}>{children}</div>
}

Badge.defaultProps = badgeDefaultProps

Badge.propTypes = badgePropTypes

export default Badge

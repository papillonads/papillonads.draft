import React from 'react'
import cx from 'classnames'
import { badgeDefaultProps, badgePropTypes } from './Badge.props'

export const Badge = ({ className, children }) => {
  const badgeClassList = cx(className)

  return <div className={badgeClassList}>{children}</div>
}

Badge.defaultProps = badgeDefaultProps

Badge.propTypes = badgePropTypes

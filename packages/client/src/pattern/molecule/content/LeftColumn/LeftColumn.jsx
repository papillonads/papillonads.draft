import React from 'react'
import cx from 'classnames'
import { leftColumn, leftColumnNavigation, leftColumnUsefulLinks } from './LeftColumn.scss'
import { Navigation } from '../Navigation'
import { MapLink } from '../../../atom/content/MapLink'
import { UsefulLinks } from '../UsefulLinks'
import { leftColumnDefaultProps, leftColumnPropTypes } from './LeftColumn.props'

export function LeftColumn({ className, data }) {
  return (
    <div className={cx(className, leftColumn)}>
      <Navigation className={leftColumnNavigation} data={data.navigation} />
      <MapLink />
      <UsefulLinks className={leftColumnUsefulLinks} data={data.usefulLinks} />
    </div>
  )
}

LeftColumn.defaultProps = leftColumnDefaultProps

LeftColumn.propTypes = leftColumnPropTypes

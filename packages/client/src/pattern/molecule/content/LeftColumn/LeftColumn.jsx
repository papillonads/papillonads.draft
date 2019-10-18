import React from 'react'
import cx from 'classnames'
import { leftColumn } from './LeftColumn.scss'
import { Navigation } from '../Navigation'
import { UsefulLinks } from '../UsefulLinks'
import { leftColumnDefaultProps, leftColumnPropTypes } from './LeftColumn.props'

export const LeftColumn = ({ className, data }) => (
  <div className={cx(className, leftColumn)}>
    <Navigation data={data.navigation} />
    <UsefulLinks data={data.usefulLinks} />
  </div>
)

LeftColumn.defaultProps = leftColumnDefaultProps

LeftColumn.propTypes = leftColumnPropTypes

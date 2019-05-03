import React from 'react'
import cn from 'classnames'
import cs from './LeftColumn.scss'
import Navigation from '../Navigation'
import MapLink from '../MapLink'
import UsefulLinks from '../UsefulLinks'
import { leftColumnDefaultProps, leftColumnPropTypes } from './LeftColumn.props'

const LeftColumn = ({ className, data }) => {
  const leftColumnClassList = cn(className, cs.leftColumn)

  return (
    <div className={leftColumnClassList}>
      <Navigation data={data.navigation} className={cs.leftColumn__navigation} />
      <MapLink data={data.mapLink} className={cs.leftColumn__mapLink} />
      <UsefulLinks data={data.usefulLinks} className={cs.leftColumn__usefulLinks} />
    </div>
  )
}

LeftColumn.defaultProps = leftColumnDefaultProps

LeftColumn.propTypes = leftColumnPropTypes

export default LeftColumn

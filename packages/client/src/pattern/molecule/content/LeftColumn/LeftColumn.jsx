import React from 'react'
import cn from 'classnames'
import cs from './LeftColumn.scss'
import Navigation from '../Navigation'
import UsefulLinks from '../UsefulLinks'
import { leftColumnDefaultProps, leftColumnPropTypes } from './LeftColumn.props'

const LeftColumn = ({ className, data }) => {
  const leftColumnClassList = cn(className, cs.leftColumn)

  return (
    <div className={leftColumnClassList}>
      <Navigation data={data.navigation} className={cs.leftColumnNavigation} />
      <UsefulLinks data={data.usefulLinks} className={cs.leftColumnUsefulLinks} />
    </div>
  )
}

LeftColumn.defaultProps = leftColumnDefaultProps

LeftColumn.propTypes = leftColumnPropTypes

export default LeftColumn

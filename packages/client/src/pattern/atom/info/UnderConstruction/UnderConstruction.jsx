import React from 'react'
import cn from 'classnames'
import { underConstructionDefaultProps, underConstructionPropTypes } from './UnderConstruction.props'

const UnderConstruction = ({ className }) => {
  const underConstructionClassList = cn(className)

  return (
    <div className={underConstructionClassList}>
      Under construction{' '}
      <span role="img" aria-label="emoji">
        🙂
      </span>
    </div>
  )
}

UnderConstruction.defaultProps = underConstructionDefaultProps

UnderConstruction.propTypes = underConstructionPropTypes

export default UnderConstruction

import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'

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

UnderConstruction.defaultProps = {
  className: '',
}

UnderConstruction.propTypes = {
  className: string,
}

export default UnderConstruction

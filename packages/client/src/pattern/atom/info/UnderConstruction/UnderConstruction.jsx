import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './UnderConstruction.scss'

const UnderConstruction = ({ className }) => {
  const underConstructionClassList = cn(className, cs.underConstruction)

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
}.isRequired

export default UnderConstruction

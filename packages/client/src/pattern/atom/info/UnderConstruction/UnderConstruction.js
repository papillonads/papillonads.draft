import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './UnderConstruction.scss'

const UnderConstruction = ({ className }) => {
  const underConstructionClassList = cn(className, styles.underConstruction)

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

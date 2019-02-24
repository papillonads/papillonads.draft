import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './Query.scss'

const Query = ({ className }) => {
  const queryClassList = cn(className, styles.query)

  return <div className={queryClassList}>Query</div>
}

Query.defaultProps = {
  className: '',
}

Query.propTypes = {
  className: string,
}.isRequired

export default Query

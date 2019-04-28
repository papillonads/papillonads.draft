import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './Query.scss'

const Query = ({ className }) => {
  const queryClassList = cn(className, cs.query)

  return <div className={queryClassList}>Query</div>
}

Query.defaultProps = {
  className: '',
}

Query.propTypes = {
  className: string,
}.isRequired

export default Query

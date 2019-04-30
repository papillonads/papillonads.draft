import React from 'react'
import cn from 'classnames'
import { queryDefaultProps, queryPropTypes } from './Query.props'

const Query = ({ className }) => {
  const queryClassList = cn(className)

  return <div className={queryClassList}>Query</div>
}

Query.defaultProps = queryDefaultProps

Query.propTypes = queryPropTypes

export default Query

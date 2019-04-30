import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'

const Query = ({ className }) => {
  const queryClassList = cn(className)

  return <div className={queryClassList}>Query</div>
}

Query.defaultProps = {
  className: '',
}

Query.propTypes = {
  className: string,
}

export default Query

import React from 'react'
import cn from 'classnames'
import { noMatchDefaultProps, noMatchPropTypes } from './NoMatch.props'

const NoMatch = ({ className, location }) => {
  const noMatchClassList = cn(className)

  return (
    <div className={noMatchClassList}>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

NoMatch.defaultProps = noMatchDefaultProps

NoMatch.propTypes = noMatchPropTypes

export default NoMatch

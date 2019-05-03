import React from 'react'
import cn from 'classnames'
import { usefulLinksDefaultProps, usefulLinksPropTypes } from './UsefulLinks.props'

const UsefulLinks = ({ className }) => {
  const usefulLinksClassList = cn(className)

  return <div className={usefulLinksClassList} />
}

UsefulLinks.defaultProps = usefulLinksDefaultProps

UsefulLinks.propTypes = usefulLinksPropTypes

export default UsefulLinks

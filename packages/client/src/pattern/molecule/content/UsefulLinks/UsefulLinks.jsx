import React from 'react'
import cn from 'classnames'
import cs from './UsefulLinks.scss'
import { usefulLinksDefaultProps, usefulLinksPropTypes } from './UsefulLinks.props'

const UsefulLinks = ({ className, data }) => {
  const usefulLinksClassList = cn(className, cs.usefulLinks)

  return <div className={usefulLinksClassList} />
}

UsefulLinks.defaultProps = usefulLinksDefaultProps

UsefulLinks.propTypes = usefulLinksPropTypes

export default UsefulLinks

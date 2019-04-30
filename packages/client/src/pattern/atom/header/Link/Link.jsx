import React from 'react'
import cn from 'classnames'
import cs from './Link.scss'
import { linkDefaultProps, linkPropTypes } from './Link.props'

const Link = ({ className, item }) => {
  const linkClassList = cn(className, cs.link)

  return <div className={linkClassList}>{item.text}</div>
}

Link.defaultProps = linkDefaultProps

Link.propTypes = linkPropTypes

export default Link

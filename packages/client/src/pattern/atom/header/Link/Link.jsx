import React from 'react'
import cn from 'classnames'
import cs from './Link.scss'
import { linkDefaultProps, linkPropTypes } from './Link.props'

export const Link = ({ className, item }) => <div className={cn(className, cs.link)}>{item.text}</div>

Link.defaultProps = linkDefaultProps

Link.propTypes = linkPropTypes

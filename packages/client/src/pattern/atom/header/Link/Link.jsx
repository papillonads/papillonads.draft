import React from 'react'
import cx from 'classnames'
import { link } from './Link.scss'
import { linkDefaultProps, linkPropTypes } from './Link.props'

export const Link = ({ className, item }) => <div className={cx(className, link)}>{item.text}</div>

Link.defaultProps = linkDefaultProps

Link.propTypes = linkPropTypes

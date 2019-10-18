/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import cn from 'classnames'
import uuidv1 from 'uuid/v1'
import cs from './Links.scss'
import { Link } from '../../../atom/header/Link'
import { linksDefaultProps, linksPropTypes } from './Links.props'

export const Links = ({ className, data }) => (
  <div className={cn(className, cs.links)}>
    {data.map(item => (
      <Link className={cs.link} key={uuidv1()} item={item} />
    ))}
  </div>
)

Links.defaultProps = linksDefaultProps

Links.propTypes = linksPropTypes
/* eslint-enable jsx-a11y/anchor-is-valid */

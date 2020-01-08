/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import cx from 'classnames'
import uuidv1 from 'uuid/v1'
import { links, link } from './Links.scss'
import { Link } from '../../../atom/header/Link'
import { linksDefaultProps, linksPropTypes } from './Links.props'

export function Links({ className, data }) {
  return (
    <div className={cx(className, links)}>
      {data.map(item => (
        <Link className={link} key={uuidv1()} item={item} />
      ))}
    </div>
  )
}

Links.defaultProps = linksDefaultProps

Links.propTypes = linksPropTypes
/* eslint-enable jsx-a11y/anchor-is-valid */

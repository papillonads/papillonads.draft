import React from 'react'
import cn from 'classnames'
import cs from './Links.scss'
import Link from '../../../atom/header/Link'
import uuidv1 from 'uuid/v1'
import { linksDefaultProps, linksPropTypes } from './Links.props'

const Links = ({ className, data }) => (
  <div className={cn(className, cs.links)}>
    {data.map(item => (
      <Link className={cs.link} key={uuidv1()} item={item} />
    ))}
  </div>
)

Links.defaultProps = linksDefaultProps

Links.propTypes = linksPropTypes

export default Links

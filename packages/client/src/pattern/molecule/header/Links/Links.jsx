import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './Links.scss'
import Link from '../../../atom/header/Link'
import uuidv1 from 'uuid/v1'
import { linksPropTypes } from './Links.propTypes'

const Links = ({ className, data }) => {
  const linksClassList = cn(className, cs.links)

  return (
    <div className={linksClassList}>
      {data.map(item => (
        <Link className={cs.link} key={uuidv1()} item={item} />
      ))}
    </div>
  )
}

Links.defaultProps = {
  className: '',
}

Links.propTypes = {
  className: string,
  data: linksPropTypes,
}

export default Links

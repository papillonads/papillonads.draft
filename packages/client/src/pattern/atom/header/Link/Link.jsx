import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './Link.scss'
import { linkShape } from './Link.shape'

const Link = ({ className, item }) => {
  const linkClassList = cn(className, cs.link)

  return <div className={linkClassList}>{item.text}</div>
}

Link.defaultProps = {
  className: '',
}

Link.propTypes = {
  className: string,
  item: linkShape.isRequired,
}.isRequired

export default Link

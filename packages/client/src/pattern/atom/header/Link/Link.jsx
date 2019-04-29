import React from 'react'
import { shape, string } from 'prop-types'
import cn from 'classnames'
import cs from './Link.scss'

const Link = ({ className, item }) => {
  const linkClassList = cn(className, cs.link)

  return <div className={linkClassList}>{item.text}</div>
}

Link.defaultProps = {
  className: '',
}

Link.propTypes = {
  className: string,
  item: shape({
    text: string.isRequired,
  }),
}.isRequired

export default Link

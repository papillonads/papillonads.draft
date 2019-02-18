import React from 'react'
import { shape, arrayOf, string } from 'prop-types'
import cn from 'classnames'
import styles from './Links.scss'
import Link from '../../../atom/header/Link'
import uuidv1 from 'uuid/v1'

const Links = ({ className, items }) => {
  const linksClassList = cn(className, styles.links)

  return (
    <div className={linksClassList}>
      {items.map(item => (
        <Link key={uuidv1()} item={item} />
      ))}
    </div>
  )
}

Links.defaultProps = {
  className: '',
}

Links.propTypes = {
  className: string,
  items: arrayOf(
    shape({
      text: string.isRequired,
    }),
  ).isRequired,
}.isRequired

export default Links

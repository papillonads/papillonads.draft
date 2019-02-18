import React from 'react'
import { shape, string } from 'prop-types'
import cn from 'classnames'
import styles from './links.scss'

const Links = ({ className }) => {
  const linksClassList = cn(className, styles.links)

  return <div className={linksClassList}>Links</div>
}

Links.defaultProps = {
  className: '',
}

Links.propTypes = shape({
  className: string,
}).isRequired

export default Links

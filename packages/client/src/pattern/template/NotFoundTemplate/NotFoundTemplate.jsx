import React from 'react'
import { string, object } from 'prop-types'
import cn from 'classnames'
import styles from './NotFoundTemplate.scss'
import { Link } from 'react-router-dom'
import { startPagePath } from '../../../route/path'
import NoMatch from '../../atom/info/NoMatch'

const NotFoundTemplate = ({ className, page, location }) => {
  const notFoundTemplateClassList = cn(className, styles.notFoundTemplate)

  return (
    <div className={notFoundTemplateClassList}>
      <h2>{page.name}</h2>
      <NoMatch location={location} />
      <Link to={startPagePath}> Back to Home Page</Link>
    </div>
  )
}

NotFoundTemplate.defaultProps = {
  className: '',
}

NotFoundTemplate.propTypes = {
  className: string,
  page: object.isRequired,
  location: object.isRequired,
}

export default NotFoundTemplate

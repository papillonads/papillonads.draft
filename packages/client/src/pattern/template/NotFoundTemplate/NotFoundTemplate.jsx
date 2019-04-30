import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { homePagePath } from '../../../route/path'
import NoMatch from '../../atom/info/NoMatch'
import { notFoundTemplateDefaultProps, notFoundTemplatePropTypes } from './NotFoundTemplate.props'

const NotFoundTemplate = ({ className, page, location }) => {
  const notFoundTemplateClassList = cn(className)

  return (
    <div className={notFoundTemplateClassList}>
      <h2>{page.name}</h2>
      <NoMatch location={location} />
      <Link to={homePagePath}> Back to Home Page</Link>
    </div>
  )
}

NotFoundTemplate.defaultProps = notFoundTemplateDefaultProps

NotFoundTemplate.propTypes = notFoundTemplatePropTypes

export default NotFoundTemplate

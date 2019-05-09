import React from 'react'
import { Link } from 'react-router-dom'
import { homePagePath } from '../../../route/path'
import NoMatch from '../../atom/info/NoMatch'
import { notFoundTemplateDefaultProps, notFoundTemplatePropTypes } from './NotFoundTemplate.props'

const NotFoundTemplate = ({ className, page, location }) => (
  <div className={className}>
    <h2>{page.name}</h2>
    <NoMatch location={location} />
    <Link to={homePagePath}> Back to Home Page</Link>
  </div>
)

NotFoundTemplate.defaultProps = notFoundTemplateDefaultProps

NotFoundTemplate.propTypes = notFoundTemplatePropTypes

export default NotFoundTemplate

import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { defaultRender } from './NotFoundTemplate.render'
import NoMatch from '../../atom/info/NoMatch'

const NotFoundTemplate = ({ page, location }) => (
  <div>
    <h2>{page.name}</h2>
    <NoMatch location={location} />
    <Link to={defaultRender}> Back to Home Page</Link>
  </div>
)

NotFoundTemplate.propTypes = {
  page: object.isRequired,
  location: object.isRequired,
}

export default NotFoundTemplate

import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { startPagePath } from '../../../route/path'

const AvatarsTemplate = ({ page }) => (
  <div>
    <h2>{page.name}</h2>
    <div>
      Under construction{' '}
      <span role="img" aria-label="emoji">
        🙂
      </span>
      <Link to={startPagePath}> Back to Home Page</Link>
    </div>
  </div>
)

AvatarsTemplate.propTypes = {
  page: object.isRequired,
}

export default AvatarsTemplate

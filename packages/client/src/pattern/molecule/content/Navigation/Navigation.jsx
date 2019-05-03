import React from 'react'
import cn from 'classnames'
import cs from './Navigation.scss'
import uuidv1 from 'uuid/v1'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.props'

const Navigation = ({ className, data }) => {
  const navigationClassList = cn(className, cs.navigation)

  return (
    <div className={navigationClassList}>
      <h3>{data.highlightsLinks.heading.title}</h3>
      {data.highlightsLinks.links.map(link => (
        <div key={uuidv1()}>
          <div>{link.title}</div>
          <div>{link.description}</div>
        </div>
      ))}
    </div>
  )
}

Navigation.defaultProps = navigationDefaultProps

Navigation.propTypes = navigationPropTypes

export default Navigation

import React from 'react'
import cn from 'classnames'
import cs from './Navigation.scss'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.props'

const Navigation = ({ className, data }) => {
  const navigationClassList = cn(className, cs.navigation)

  return <div className={navigationClassList} />
}

Navigation.defaultProps = navigationDefaultProps

Navigation.propTypes = navigationPropTypes

export default Navigation

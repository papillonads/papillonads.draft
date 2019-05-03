import React from 'react'
import cn from 'classnames'
import { mapLinkDefaultProps, mapLinkPropTypes } from './MapLink.props'

const MapLink = ({ className }) => {
  const mapLinkClassList = cn(className)

  return <div className={mapLinkClassList} />
}

MapLink.defaultProps = mapLinkDefaultProps

MapLink.propTypes = mapLinkPropTypes

export default MapLink

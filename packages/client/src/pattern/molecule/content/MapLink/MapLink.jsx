import React from 'react'
import cn from 'classnames'
import cs from './MapLink.scss'
import { mapLinkDefaultProps, mapLinkPropTypes } from './MapLink.props'

const MapLink = ({ className, data }) => {
  const mapLinkClassList = cn(className, cs.mapLink)

  return <div className={mapLinkClassList} />
}

MapLink.defaultProps = mapLinkDefaultProps

MapLink.propTypes = mapLinkPropTypes

export default MapLink

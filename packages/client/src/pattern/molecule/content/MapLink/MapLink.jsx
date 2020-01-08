import React from 'react'
import { mapLinkDefaultProps, mapLinkPropTypes } from './MapLink.props'

export function MapLink({ className }) {
  return <div className={className} />
}

MapLink.defaultProps = mapLinkDefaultProps

MapLink.propTypes = mapLinkPropTypes

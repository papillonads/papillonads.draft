import React from 'react'
import { mapLinkDefaultProps, mapLinkPropTypes } from './MapLink.props'

const MapLink = ({ className }) => <div className={className} />

MapLink.defaultProps = mapLinkDefaultProps

MapLink.propTypes = mapLinkPropTypes

export default MapLink

import React from 'react'
import { mapLinkDefaultProps, mapLinkPropTypes } from './MapLink.props'

export const MapLink = ({ className }) => <div className={className} />

MapLink.defaultProps = mapLinkDefaultProps

MapLink.propTypes = mapLinkPropTypes

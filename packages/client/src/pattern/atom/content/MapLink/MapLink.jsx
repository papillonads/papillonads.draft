import React from 'react'
import cx from 'classnames'
import { mapLink, mapLinkHeading, mapLinkImage } from './MapLink.scss'
import { mapLinkDefaultProps, mapLinkPropTypes } from './MapLink.props'

export function MapLink({ className }) {
  return (
    <div className={cx(className, mapLink)}>
      <h3 className={mapLinkHeading}>
        <a href="kijkinuwwijk.html">Kijk in je Wijk</a>
      </h3>
      <a href="kijkinuwwijk.html" className={mapLinkImage}>
        <img alt="" src="https://s.marktplaats.com/z/res/images/map_link.png?break" />
      </a>
    </div>
  )
}

MapLink.defaultProps = mapLinkDefaultProps

MapLink.propTypes = mapLinkPropTypes

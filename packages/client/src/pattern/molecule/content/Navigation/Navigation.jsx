import React from 'react'
import uuidv1 from 'uuid/v1'
import {
  highlightsLinks,
  title,
  highlightsLinksLink,
  highlightsLinksLinkIcon,
  highlightsLinksLinkText,
  highlightsLinksLinkTextTitle,
  highlightsLinksLinkTextDescription,
  navigationBlockLinks,
  navigationBlockLinksLink,
} from './Navigation.scss'
import { SvgIconGroup } from '../../../atom/header/Icon/SvgIconGroup'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.props'

export function Navigation({ className, data }) {
  return (
    <div className={className}>
      <div className={highlightsLinks}>
        <div className={title}>{data.highlightsLinks.heading.title}</div>
        {data.highlightsLinks.links.map(link => (
          <div className={highlightsLinksLink} key={uuidv1()}>
            <div className={highlightsLinksLinkIcon}>
              <SvgIconGroup name={link.icon} width={36} height={36} viewBox="0 0 96 96" pathProps={[]} />
            </div>
            <div className={highlightsLinksLinkText}>
              <div className={highlightsLinksLinkTextTitle}>{link.title}</div>
              <div className={highlightsLinksLinkTextDescription}>{link.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={navigationBlockLinks}>
        <div className={title}>{data.navigationBlock.heading.title}</div>
        {data.navigationBlock.groups.map(link => (
          <div className={navigationBlockLinksLink} key={uuidv1()}>
            {link.name}
          </div>
        ))}
      </div>
    </div>
  )
}

Navigation.defaultProps = navigationDefaultProps

Navigation.propTypes = navigationPropTypes

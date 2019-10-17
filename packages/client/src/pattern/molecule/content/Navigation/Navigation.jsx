import React from 'react'
import uuidv1 from 'uuid/v1'
import cs from './Navigation.scss'
import SvgIconGroup from '../../../atom/header/Icon/SvgIconGroup'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.props'

const Navigation = ({ className, data }) => (
  <div className={className}>
    <div className={cs.highlightsLinks}>
      <div className={cs.title}>{data.highlightsLinks.heading.title}</div>
      {data.highlightsLinks.links.map(link => (
        <div className={cs.highlightsLinksLink} key={uuidv1()}>
          <div className={cs.highlightsLinksLinkIcon}>
            <SvgIconGroup name={link.icon} width={36} height={36} viewBox="0 0 96 96" pathProps={[]} />
          </div>
          <div className={cs.highlightsLinksLinkText}>
            <div className={cs.highlightsLinksLinkTextTitle}>{link.title}</div>
            <div className={cs.highlightsLinksLinkTextDescription}>{link.description}</div>
          </div>
        </div>
      ))}
    </div>
    <div className={cs.navigationBlockLinks}>
      <div className={cs.title}>{data.navigationBlock.heading.title}</div>
      {data.navigationBlock.groups.map(link => (
        <div className={cs.navigationBlockLinksLink} key={uuidv1()}>
          {link.name}
        </div>
      ))}
    </div>
  </div>
)

Navigation.defaultProps = navigationDefaultProps

Navigation.propTypes = navigationPropTypes

export default Navigation

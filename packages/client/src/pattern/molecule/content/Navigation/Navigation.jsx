import React from 'react'
import cn from 'classnames'
import cs from './Navigation.scss'
import SvgIconGroup from '../../../atom/header/Icon/SvgIconGroup'
import uuidv1 from 'uuid/v1'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.props'

const Navigation = ({ className, data }) => {
  const navigationClassList = cn(className, cs.navigation)

  return (
    <div className={navigationClassList}>
      <div className={cs.navHighlightsLinks}>
        <div className={cs.navTitle}>{data.highlightsLinks.heading.title}</div>
        {data.highlightsLinks.links.map(link => (
          <div className={cs.navHighlightsLinksLink} key={uuidv1()}>
            <div className={cs.navHighlightsLinksLinkIcon}>
              <SvgIconGroup name={link.icon} width={36} height={36} viewBox="0 0 96 96" pathProps={[]} />
            </div>
            <div className={cs.navHighlightsLinksLinkText}>
              <div className={cs.navHighlightsLinksLinkTextTitle}>{link.title}</div>
              <div className={cs.navHighlightsLinksLinkTextDescription}>{link.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={cs.navNavigationBlockLinks}>
        <div className={cs.navTitle}>{data.navigationBlock.heading.title}</div>

        {data.navigationBlock.groups.map(link => (
          <div className={cs.navNavigationBlockLinksLink} key={uuidv1()}>
            {link.name}
          </div>
        ))}
      </div>
    </div>
  )
}

Navigation.defaultProps = navigationDefaultProps

Navigation.propTypes = navigationPropTypes

export default Navigation

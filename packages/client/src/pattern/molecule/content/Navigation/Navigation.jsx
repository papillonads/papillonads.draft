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
      <div className={cs.nav__title}>{data.highlightsLinks.heading.title}</div>
      <div className={cs.nav__items}>
        {data.highlightsLinks.links.map(link => (
          <div className={cs.nav__itemsLink} key={uuidv1()}>
            <div className={cs.nav__itemsLinkIcon}>
              <SvgIconGroup name={link.icon} width={36} height={36} viewBox="0 0 96 96" pathProps={[]} />
            </div>
            <div className={cs.nav__itemsLinkText}>
              <div className={cs.nav__itemsLinkTextTitle}>{link.title}</div>
              <div className={cs.nav__itemsLinkTextDescription}>{link.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Navigation.defaultProps = navigationDefaultProps

Navigation.propTypes = navigationPropTypes

export default Navigation

import React from 'react'
import uuidv1 from 'uuid/v1'
import cs from './UsefulLinks.scss'
import { SvgIconGroup } from '../../../atom/header/Icon/SvgIconGroup'
import { usefulLinksDefaultProps, usefulLinksPropTypes } from './UsefulLinks.props'

export const UsefulLinks = ({ className, data }) => (
  <div className={className}>
    <div className={cs.buyersLinks}>
      <div className={cs.title}>{data.buyersLinks.heading.title}</div>
      {data.buyersLinks.links.map(link => (
        <div className={cs.buyersLinksLink} key={uuidv1()}>
          <div className={cs.buyersLinksLinkIcon}>
            <SvgIconGroup name={link.icon} width={36} height={36} viewBox="0 0 96 96" pathProps={[]} />
          </div>
          <div className={cs.buyersLinksLinkText}>
            <div className={cs.buyersLinksLinkTextTitle}>{link.title}</div>
            <div className={cs.buyersLinksLinkTextDescription}>{link.description}</div>
          </div>
        </div>
      ))}
    </div>
    <div className={cs.sellersLinks}>
      <div className={cs.title}>{data.sellersLinks.heading.title}</div>
      {data.sellersLinks.links.map(link => (
        <div className={cs.sellersLinksLink} key={uuidv1()}>
          <div className={cs.sellersLinksLinkIcon}>
            <SvgIconGroup name={link.icon} width={36} height={36} viewBox="0 0 96 96" pathProps={[]} />
          </div>
          <div className={cs.sellersLinksLinkText}>
            <div className={cs.sellersLinksLinkTextTitle}>{link.title}</div>
            <div className={cs.sellersLinksLinkTextDescription}>{link.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

UsefulLinks.defaultProps = usefulLinksDefaultProps

UsefulLinks.propTypes = usefulLinksPropTypes

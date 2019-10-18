import React from 'react'
import uuidv1 from 'uuid/v1'
import {
  buyersLinks,
  title,
  buyersLinksLink,
  buyersLinksLinkIcon,
  buyersLinksLinkText,
  buyersLinksLinkTextTitle,
  buyersLinksLinkTextDescription,
  sellersLinks,
  sellersLinksLink,
  sellersLinksLinkIcon,
  sellersLinksLinkText,
  sellersLinksLinkTextTitle,
  sellersLinksLinkTextDescription,
} from './UsefulLinks.scss'
import { SvgIconGroup } from '../../../atom/header/Icon/SvgIconGroup'
import { usefulLinksDefaultProps, usefulLinksPropTypes } from './UsefulLinks.props'

export const UsefulLinks = ({ className, data }) => (
  <div className={className}>
    <div className={buyersLinks}>
      <div className={title}>{data.buyersLinks.heading.title}</div>
      {data.buyersLinks.links.map(link => (
        <div className={buyersLinksLink} key={uuidv1()}>
          <div className={buyersLinksLinkIcon}>
            <SvgIconGroup name={link.icon} width={36} height={36} viewBox="0 0 96 96" pathProps={[]} />
          </div>
          <div className={buyersLinksLinkText}>
            <div className={buyersLinksLinkTextTitle}>{link.title}</div>
            <div className={buyersLinksLinkTextDescription}>{link.description}</div>
          </div>
        </div>
      ))}
    </div>
    <div className={sellersLinks}>
      <div className={title}>{data.sellersLinks.heading.title}</div>
      {data.sellersLinks.links.map(link => (
        <div className={sellersLinksLink} key={uuidv1()}>
          <div className={sellersLinksLinkIcon}>
            <SvgIconGroup name={link.icon} width={36} height={36} viewBox="0 0 96 96" pathProps={[]} />
          </div>
          <div className={sellersLinksLinkText}>
            <div className={sellersLinksLinkTextTitle}>{link.title}</div>
            <div className={sellersLinksLinkTextDescription}>{link.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

UsefulLinks.defaultProps = usefulLinksDefaultProps

UsefulLinks.propTypes = usefulLinksPropTypes

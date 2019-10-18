import React from 'react'
import cx from 'classnames'
import { maxWidth, leftColumn } from './Content.scss'
// import Banner from '../../../atom/content/Banner'
import { LeftColumn } from '../../../molecule/content/LeftColumn'
import { contentDefaultProps, contentPropTypes } from './Content.props'

export const Content = ({ className, data }) => (
  <div className={cx(className, maxWidth)}>
    {/* <Banner className={topBanner} data={data.topBanner} /> */}
    <LeftColumn className={leftColumn} data={data.leftColumn} />
  </div>
)

Content.defaultProps = contentDefaultProps

Content.propTypes = contentPropTypes

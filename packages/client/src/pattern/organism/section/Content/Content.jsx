import React from 'react'
import cn from 'classnames'
import cs from './Content.scss'
// import Banner from '../../../atom/content/Banner'
import { LeftColumn } from '../../../molecule/content/LeftColumn'
import { contentDefaultProps, contentPropTypes } from './Content.props'

export const Content = ({ className, data }) => (
  <div className={cn(className, cs.maxWidth)}>
    {/* <Banner className={cs.topBanner} data={data.topBanner} /> */}
    <LeftColumn className={cs.leftColumn} data={data.leftColumn} />
  </div>
)

Content.defaultProps = contentDefaultProps

Content.propTypes = contentPropTypes

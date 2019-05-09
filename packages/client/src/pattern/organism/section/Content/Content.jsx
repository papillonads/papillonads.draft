import React from 'react'
import cs from './Content.scss'
import Banner from '../../../atom/content/Banner'
import LeftColumn from '../../../molecule/content/LeftColumn'
import { contentDefaultProps, contentPropTypes } from './Content.props'

const Content = ({ className, data }) => (
  <div className={className}>
    <div className={cs.maxWidth}>
      <Banner className={cs.topBanner} data={data.topBanner} />
      <LeftColumn className={cs.leftColumn} data={data.leftColumn} />
    </div>
  </div>
)

Content.defaultProps = contentDefaultProps

Content.propTypes = contentPropTypes

export default Content

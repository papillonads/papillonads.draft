import React from 'react'
import cn from 'classnames'
import cs from './Content.scss'
import Banner from '../../../atom/content/Banner'
import LeftColumn from '../../../molecule/content/LeftColumn'
import { contentDefaultProps, contentPropTypes } from './Content.props'

const Content = ({ className, data }) => {
  const contentClassList = cn(className, cs.content)

  return (
    <div className={contentClassList}>
      <Banner data={data.topBanner} />
      <LeftColumn data={data.leftColumn} />
    </div>
  )
}

Content.defaultProps = contentDefaultProps

Content.propTypes = contentPropTypes

export default Content

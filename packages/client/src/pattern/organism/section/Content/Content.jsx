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
      <div className={cn(cs.content__maxWidth)}>
        <Banner className={cs.content__topBanner} data={data.topBanner} />
        <LeftColumn className={cs.content__leftColumn} data={data.leftColumn} />
      </div>
    </div>
  )
}

Content.defaultProps = contentDefaultProps

Content.propTypes = contentPropTypes

export default Content

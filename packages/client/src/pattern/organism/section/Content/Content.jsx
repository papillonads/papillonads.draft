import React from 'react'
import cn from 'classnames'
import cs from './Content.scss'
import Banner from '../../../atom/content/Banner'
import { contentDefaultProps, contentPropTypes } from './Content.props'

const Content = ({ className, data }) => {
  const contentClassList = cn(className, cs.content)

  return (
    <div className={contentClassList}>
      <Banner data={data.topBanner} className={cs.content__topBanner} />
    </div>
  )
}

Content.defaultProps = contentDefaultProps

Content.propTypes = contentPropTypes

export default Content

import React from 'react'
import cn from 'classnames'
import Banner from '../../../atom/content/Banner'
import { contentDefaultProps, contentPropTypes } from './Content.props'

const Content = ({ className, data }) => {
  const contentClassList = cn(className)

  return (
    <div className={contentClassList}>
      <Banner data={data.topBanner} />
    </div>
  )
}

Content.defaultProps = contentDefaultProps

Content.propTypes = contentPropTypes

export default Content

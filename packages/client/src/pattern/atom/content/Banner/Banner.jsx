import React from 'react'
import cn from 'classnames'
import cs from './Banner.scss'
import { bannerDefaultProps, bannerPropTypes } from './Banner.props'

const Banner = ({ className, data }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const { resources } = data
  const resource = resources[getRandomInt(resources.length)]
  const { maxWidth, height } = resource

  const iFrameWrapperStyle = {
    maxWidth: maxWidth,
    height: height,
  }

  const bannerClassList = cn(className, cs.banner)

  return (
    <div className={bannerClassList} style={iFrameWrapperStyle}>
      <iframe title="banner" src={resource.url} />
    </div>
  )
}

Banner.defaultProps = bannerDefaultProps

Banner.propTypes = bannerPropTypes

export default Banner

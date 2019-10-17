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
  const { url, maxWidth, height } = resource

  const urlParts = url.split('.')
  const extension = urlParts[urlParts.length - 1]

  const iFrameWrapperStyle = {
    maxWidth,
    height,
  }

  const bannerClassList = cn(className, cs.banner)

  const getIFrameBanner = () => (
    <div className={bannerClassList} style={iFrameWrapperStyle}>
      <iframe scrolling="no" title="banner" src={resource.url} />
    </div>
  )

  const getImageBanner = () => (
    <div className={bannerClassList} style={iFrameWrapperStyle}>
      <img src={resource.url} alt="" />
    </div>
  )

  if (extension === 'html') {
    return getIFrameBanner()
  }

  if (extension === 'png') {
    return getImageBanner()
  }

  return getIFrameBanner()
}

Banner.defaultProps = bannerDefaultProps

Banner.propTypes = bannerPropTypes

export default Banner

import React from 'react'
import cn from 'classnames'
import cs from './Banner.scss'
import { bannerDefaultProps, bannerPropTypes } from './Banner.props'

const Banner = ({ className, data }) => {
  const bannerClassList = cn(className, cs.banner)

  return (
    <div className={bannerClassList}>
      <iframe title="marketing banner" src={data.resources[0].url} />
    </div>
  )
}

Banner.defaultProps = bannerDefaultProps

Banner.propTypes = bannerPropTypes

export default Banner

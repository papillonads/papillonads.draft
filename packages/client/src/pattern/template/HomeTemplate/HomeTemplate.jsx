import React from 'react'
import cn from 'classnames'
import cs from './HomeTemplate.scss'
import Ribbon from '../../atom/header/Ribbon'
import Header from '../../organism/section/Header'
import Content from '../../organism/section/Content'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.props'

const HomeTemplate = ({ className, data }) => {
  const homeTemplateClassList = cn(className, cs.homeTemplate)

  return (
    <div className={homeTemplateClassList}>
      <Ribbon className={cs.homeTemplate__ribbonTop} />
      <Header data={data.header} />
      <Ribbon className={cs.homeTemplate__ribbonBottom} />
      <Content data={data.content} />
    </div>
  )
}

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes

export default HomeTemplate

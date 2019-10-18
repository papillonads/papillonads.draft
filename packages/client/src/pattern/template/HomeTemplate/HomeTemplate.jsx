import React from 'react'
import cn from 'classnames'
import cs from './HomeTemplate.scss'
import Ribbon from '../../atom/header/Ribbon'
import Header from '../../organism/section/Header'
import Content from '../../organism/section/Content'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.props'

export const HomeTemplate = ({ className, data }) => (
  <div className={cn(className, cs.homeTemplate)}>
    <Ribbon className={cs.ribbonTop} />
    <Header data={data.header} />
    <Ribbon className={cs.ribbonBottom} />
    <Content data={data.content} />
  </div>
)

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes

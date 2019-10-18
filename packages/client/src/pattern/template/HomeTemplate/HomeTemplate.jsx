import React from 'react'
import cx from 'classnames'
import { homeTemplate, ribbonTop, ribbonBottom } from './HomeTemplate.scss'
import { Ribbon } from '../../atom/header/Ribbon'
import { Header } from '../../organism/section/Header'
import { Content } from '../../organism/section/Content'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.props'

export const HomeTemplate = ({ className, data }) => (
  <div className={cx(className, homeTemplate)}>
    <Ribbon className={ribbonTop} />
    <Header data={data.header} />
    <Ribbon className={ribbonBottom} />
    <Content data={data.content} />
  </div>
)

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes

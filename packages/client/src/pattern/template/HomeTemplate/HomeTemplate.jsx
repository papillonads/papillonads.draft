import React from 'react'
import { string, object } from 'prop-types'
import cn from 'classnames'
import cs from './HomeTemplate.scss'
import Ribbon from '../../atom/header/Ribbon'
import Header from '../../organism/section/Header/Header'

const HomeTemplate = ({ className, data }) => {
  const homeTemplateClassList = cn(className, cs.homeTemplate)

  return (
    <div className={homeTemplateClassList}>
      <Ribbon className={cs.homeTemplate__ribbonTop} />
      <Header data={data.header} />
      <Ribbon className={cs.homeTemplate__ribbonBottom} />
    </div>
  )
}

HomeTemplate.defaultProps = {
  className: '',
}

HomeTemplate.propTypes = {
  className: string,
  data: object.isRequired,
}

export default HomeTemplate

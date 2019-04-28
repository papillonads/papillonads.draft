import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './HomeTemplate.scss'
import Ribbon from '../../atom/header/Ribbon'
import Header from '../../organism/section/Header/Header'

const HomeTemplate = ({ className }) => {
  const homeTemplateClassList = cn(className, cs.homeTemplate)

  return (
    <div className={homeTemplateClassList}>
      <Ribbon className={cs.homeTemplate__ribbonTop} />
      <Header />
      <Ribbon className={cs.homeTemplate__ribbonBottom} />
    </div>
  )
}

HomeTemplate.defaultProps = {
  className: '',
}

HomeTemplate.propTypes = {
  className: string,
}

export default HomeTemplate

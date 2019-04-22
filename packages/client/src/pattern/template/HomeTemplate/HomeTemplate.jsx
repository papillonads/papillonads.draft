import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import ps from '@primer/css/core/index.scss'
import cs from './HomeTemplate.scss'
import Ribbon from '../../atom/header/Ribbon'
import Header from '../../organism/section/Header/Header'

const HomeTemplate = ({ className }) => {
  const homeTemplateClassList = cn(className, cs.homeTemplate)

  return (
    <div className={homeTemplateClassList}>
      <Ribbon />
      <div className={cn(ps['col-8'], ps['mx-auto'])}>
        <Header />
      </div>
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

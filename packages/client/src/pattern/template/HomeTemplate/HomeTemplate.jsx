import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './HomeTemplate.scss'
import Header from '../../organism/section/Header/Header'

const HomeTemplate = ({ className }) => {
  const homeTemplateClassList = cn(className, styles.homeTemplate)

  return (
    <div className={homeTemplateClassList}>
      <Header />
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

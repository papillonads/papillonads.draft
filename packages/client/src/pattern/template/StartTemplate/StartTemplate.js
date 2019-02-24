import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './StartTemplate.scss'
import Header from '../../organism/section/Header/Header'

const StartTemplate = ({ className }) => {
  const startTemplateClassList = cn(className, styles.startTemplate)

  return (
    <div className={startTemplateClassList}>
      <Header />
    </div>
  )
}

StartTemplate.defaultProps = {
  className: '',
}

StartTemplate.propTypes = {
  className: string,
}

export default StartTemplate

import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'

const Label = ({ className, text }) => {
  const labelClassList = cn(className)

  return <div className={labelClassList}>{text}</div>
}

Label.defaultProps = {
  className: '',
}

Label.propTypes = {
  className: string,
  text: string,
}

export default Label

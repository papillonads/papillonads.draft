import React from 'react'
import { usefulLinksDefaultProps, usefulLinksPropTypes } from './UsefulLinks.props'

const UsefulLinks = ({ className }) => <div className={className} />

UsefulLinks.defaultProps = usefulLinksDefaultProps

UsefulLinks.propTypes = usefulLinksPropTypes

export default UsefulLinks

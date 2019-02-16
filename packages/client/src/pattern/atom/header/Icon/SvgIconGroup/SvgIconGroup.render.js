import React from 'react'
import SvgIconGroup from './SvgIconGroup'
import {
  logoRenderProps,
  messagesRenderProps,
  notificationRenderProps,
  notificationGreyRenderProps,
  profileRenderProps,
  pinRenderProps,
} from './SvgIconGroup.render.props'

export const logoRender = <SvgIconGroup {...logoRenderProps} />
export const messagesRender = <SvgIconGroup {...messagesRenderProps} />
export const notificationRender = <SvgIconGroup {...notificationRenderProps} />
export const notificationGreyRender = <SvgIconGroup {...notificationGreyRenderProps} />
export const profileRender = <SvgIconGroup {...profileRenderProps} />
export const pinRender = <SvgIconGroup {...pinRenderProps} />

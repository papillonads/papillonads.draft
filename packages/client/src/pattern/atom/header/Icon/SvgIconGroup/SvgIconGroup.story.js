import { storiesOf } from '@storybook/react'
import { logoRender, messagesRender, notificationRender, notificationGreyRender, profileRender, pinRender } from './SvgIconGroup.render'
import { getInfo } from '../../../../../../../../.storybook/utility'

const logoRenderInfo = getInfo('logo')
const messagesRenderInfo = getInfo('messages')
const notificationRenderInfo = getInfo('notification')
const notificationGreyRenderInfo = getInfo('notificationGrey')
const profileRenderInfo = getInfo('profile')
const pinRenderInfo = getInfo('pin')

storiesOf('Patttern/Atom/Header/Icon/SvgIconGroup', module)
  .add(logoRenderInfo.text, () => logoRender, logoRenderInfo.parameters)
  .add(messagesRenderInfo.text, () => messagesRender, messagesRenderInfo.parameters)
  .add(notificationRenderInfo.text, () => notificationRender, notificationRenderInfo.parameters)
  .add(notificationGreyRenderInfo.text, () => notificationGreyRender, notificationGreyRenderInfo.parameters)
  .add(profileRenderInfo.text, () => profileRender, profileRenderInfo.parameters)
  .add(pinRenderInfo.text, () => pinRender, pinRenderInfo.parameters)

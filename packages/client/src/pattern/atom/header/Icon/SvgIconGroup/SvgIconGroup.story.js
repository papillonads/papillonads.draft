import { storiesOf } from '@storybook/react'
import { logoRender, messagesRender, notificationRender, notificationGreyRender, profileRender, pinRender } from './SvgIconGroup.render'
import { getInfo } from '../../../../../../../../.storybook/utility'

const logoRenderInfo = getInfo('logoRender')
const messagesRenderInfo = getInfo('messagesRender')
const notificationRenderInfo = getInfo('notificationRender')
const notificationGreyRenderInfo = getInfo('notificationGreyRender')
const profileRenderInfo = getInfo('profileRender')
const pinRenderInfo = getInfo('pinRender')

storiesOf('Patttern/Atom/Header/Icon/SvgIconGroup', module)
  .add(logoRenderInfo.text, () => logoRender, logoRenderInfo.parameters)
  .add(messagesRenderInfo.text, () => messagesRender, messagesRenderInfo.parameters)
  .add(notificationRenderInfo.text, () => notificationRender, notificationRenderInfo.parameters)
  .add(notificationGreyRenderInfo.text, () => notificationGreyRender, notificationGreyRenderInfo.parameters)
  .add(profileRenderInfo.text, () => profileRender, profileRenderInfo.parameters)
  .add(pinRenderInfo.text, () => pinRender, pinRenderInfo.parameters)

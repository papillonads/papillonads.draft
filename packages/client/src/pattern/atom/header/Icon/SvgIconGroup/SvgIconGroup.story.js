import { storiesOf } from '@storybook/react'
import {
  logoRender,
  messagesRender,
  notificationRender,
  notificationGreyRender,
  profileRender,
  pinRender,
  carsRender,
  vacantiesRender,
  offersRender,
  handshakeRender,
  arrowLargeRender,
} from './SvgIconGroup.render'
import { getInfo } from '../../../../../../../../.storybook/utility'

const logoRenderInfo = getInfo('logo')
const messagesRenderInfo = getInfo('messages')
const notificationRenderInfo = getInfo('notification')
const notificationGreyRenderInfo = getInfo('notificationGrey')
const profileRenderInfo = getInfo('profile')
const pinRenderInfo = getInfo('pin')
const carsRenderInfo = getInfo('cars')
const vacantiesRenderInfo = getInfo('vacanties')
const offersRenderInfo = getInfo('offers')
const handshakeRenderInfo = getInfo('handshake')
const arrowLargeRenderInfo = getInfo('arrow-large')

storiesOf('Patttern/Atom/Header/Icon/SvgIconGroup', module)
  .add(logoRenderInfo.text, () => logoRender, logoRenderInfo.parameters)
  .add(messagesRenderInfo.text, () => messagesRender, messagesRenderInfo.parameters)
  .add(notificationRenderInfo.text, () => notificationRender, notificationRenderInfo.parameters)
  .add(notificationGreyRenderInfo.text, () => notificationGreyRender, notificationGreyRenderInfo.parameters)
  .add(profileRenderInfo.text, () => profileRender, profileRenderInfo.parameters)
  .add(pinRenderInfo.text, () => pinRender, pinRenderInfo.parameters)
  .add(carsRenderInfo.text, () => carsRender, carsRenderInfo.parameters)
  .add(vacantiesRenderInfo.text, () => vacantiesRender, vacantiesRenderInfo.parameters)
  .add(offersRenderInfo.text, () => offersRender, offersRenderInfo.parameters)
  .add(handshakeRenderInfo.text, () => handshakeRender, handshakeRenderInfo.parameters)
  .add(arrowLargeRenderInfo.text, () => arrowLargeRender, arrowLargeRenderInfo.parameters)

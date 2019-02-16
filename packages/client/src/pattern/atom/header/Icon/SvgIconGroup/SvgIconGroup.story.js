import { storiesOf } from '@storybook/react'
import { logoRender, messagesRender } from './SvgIconGroup.render'
import { getInfo } from '../../../../../../../../.storybook/utility'

const logoRenderInfo = getInfo('logoRender')
const messagesRenderInfo = getInfo('messagesRender')

storiesOf('Patttern/Atom/Header/Icon/SvgIconGroup', module)
  .add(logoRenderInfo.text, () => logoRender, logoRenderInfo.parameters)
  .add(messagesRenderInfo.text, () => messagesRender, messagesRenderInfo.parameters)

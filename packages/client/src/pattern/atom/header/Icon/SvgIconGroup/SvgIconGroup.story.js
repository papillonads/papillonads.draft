import { storiesOf } from '@storybook/react'
import { mp1Render, mp2Render, mp3Render } from './SvgIconGroup.render'
import { getInfo } from '../../../../../../../../.storybook/utility'

const mp1RenderInfo = getInfo('mp1')
const mp2RenderInfo = getInfo('mp2')
const mp3RenderInfo = getInfo('mp3')

storiesOf('Patttern/Atom/Header/Icon/SvgIconGroup', module)
  .add(mp1RenderInfo.text, () => mp1Render, mp1RenderInfo.parameters)
  .add(mp2RenderInfo.text, () => mp2Render, mp2RenderInfo.parameters)
  .add(mp3RenderInfo.text, () => mp3Render, mp3RenderInfo.parameters)

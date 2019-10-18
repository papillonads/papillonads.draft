import { storiesOf } from '@storybook/react'
import {
  pushpinRender,
  bellRender,
  bubbleRender,
  bubblesRender,
  bubbles2Render,
  bubble2Render,
  bubbles3Render,
  bubbles4Render,
  userRender,
  usersRender,
  userPlusRender,
  userMinusRender,
  userCheckRender,
  ctrlRender,
} from './SvgIcon.int.render'
import { getInfo } from '../../../../../../../../../.storybook/library'

const pushpinRenderInfo = getInfo('pushpin')
const bellRenderInfo = getInfo('bell')
const bubbleRenderInfo = getInfo('bubble')
const bubblesRenderInfo = getInfo('bubbles')
const bubbles2RenderInfo = getInfo('bubbles2')
const bubble2RenderInfo = getInfo('bubble2')
const bubbles3RenderInfo = getInfo('bubbles3')
const bubbles4RenderInfo = getInfo('bubbles4')
const userRenderInfo = getInfo('user')
const usersRenderInfo = getInfo('users')
const userPlusRenderInfo = getInfo('user-plus')
const userMinusRenderInfo = getInfo('user-minus')
const userCheckRenderInfo = getInfo('user-check')
const ctrlRenderInfo = getInfo('ctrl')

storiesOf('Patttern/Atom/Header/Icon/SvgIcon', module)
  .add(pushpinRenderInfo.text, () => pushpinRender, pushpinRenderInfo.parameters)
  .add(bellRenderInfo.text, () => bellRender, bellRenderInfo.parameters)
  .add(bubbleRenderInfo.text, () => bubbleRender, bubbleRenderInfo.parameters)
  .add(bubblesRenderInfo.text, () => bubblesRender, bubblesRenderInfo.parameters)
  .add(bubbles2RenderInfo.text, () => bubbles2Render, bubbles2RenderInfo.parameters)
  .add(bubble2RenderInfo.text, () => bubble2Render, bubble2RenderInfo.parameters)
  .add(bubbles3RenderInfo.text, () => bubbles3Render, bubbles3RenderInfo.parameters)
  .add(bubbles4RenderInfo.text, () => bubbles4Render, bubbles4RenderInfo.parameters)
  .add(userRenderInfo.text, () => userRender, userRenderInfo.parameters)
  .add(usersRenderInfo.text, () => usersRender, usersRenderInfo.parameters)
  .add(userPlusRenderInfo.text, () => userPlusRender, userPlusRenderInfo.parameters)
  .add(userMinusRenderInfo.text, () => userMinusRender, userMinusRenderInfo.parameters)
  .add(userCheckRenderInfo.text, () => userCheckRender, userCheckRenderInfo.parameters)
  .add(ctrlRenderInfo.text, () => ctrlRender, ctrlRenderInfo.parameters)

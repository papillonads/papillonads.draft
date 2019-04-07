import { storiesOf } from '@storybook/react'
import { defaultRender } from './HomeTemplate.render'
import { getInfo } from '../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Template/HomeTemplate', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

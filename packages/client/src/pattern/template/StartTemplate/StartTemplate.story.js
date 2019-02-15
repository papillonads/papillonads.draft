import { storiesOf } from '@storybook/react'
import { defaultRender } from './StartTemplate.render'
import { getInfo } from '../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Template/StartTemplate', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

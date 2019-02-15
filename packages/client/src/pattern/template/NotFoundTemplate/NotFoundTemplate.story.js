import { storiesOf } from '@storybook/react'
import { defaultRender } from './NotFoundTemplate.render'
import { getInfo } from '../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Template/NotFoundTemplate', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

import { storiesOf } from '@storybook/react'
import { defaultRender } from './NotFoundPage.render'
import { getInfo } from '../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Page/NotFoundPage', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

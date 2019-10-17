import { storiesOf } from '@storybook/react'
import { defaultRender } from './HomePage.render'
import { getInfo } from '../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Page/HomePage', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

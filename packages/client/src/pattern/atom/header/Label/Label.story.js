import { storiesOf } from '@storybook/react'
import { defaultRender } from './Label.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Label', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

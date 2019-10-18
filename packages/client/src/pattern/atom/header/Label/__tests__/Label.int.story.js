import { storiesOf } from '@storybook/react'
import { defaultRender } from './Label.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

export const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Label', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

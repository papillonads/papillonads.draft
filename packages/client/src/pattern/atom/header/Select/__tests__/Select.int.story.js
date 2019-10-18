import { storiesOf } from '@storybook/react'
import { defaultRender } from './Select.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

export const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Select', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

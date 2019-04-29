import { storiesOf } from '@storybook/react'
import { defaultRender } from './Select.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Select', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

import { storiesOf } from '@storybook/react'
import { defaultRender } from './Input.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Input', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

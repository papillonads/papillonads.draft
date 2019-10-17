import { storiesOf } from '@storybook/react'
import { defaultRender } from './Button.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Button', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

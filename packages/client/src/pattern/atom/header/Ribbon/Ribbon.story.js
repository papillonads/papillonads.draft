import { storiesOf } from '@storybook/react'
import { defaultRender } from './Ribbon.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Ribbon', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

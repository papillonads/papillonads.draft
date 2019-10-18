import { storiesOf } from '@storybook/react'
import { defaultRender } from './Ribbon.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Ribbon', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

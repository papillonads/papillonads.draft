import { storiesOf } from '@storybook/react'
import { defaultRender } from './Logo.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Logo', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

import { storiesOf } from '@storybook/react'
import { defaultRender } from './Logo.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Logo', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

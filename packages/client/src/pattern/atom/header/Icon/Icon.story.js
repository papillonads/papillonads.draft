import { storiesOf } from '@storybook/react'
import { defaultRender } from './Icon.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Icon', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

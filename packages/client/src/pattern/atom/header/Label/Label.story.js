import { storiesOf } from '@storybook/react'
import { defaultRender } from './Label.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Label', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

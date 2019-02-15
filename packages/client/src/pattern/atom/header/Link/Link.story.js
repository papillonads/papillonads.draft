import { storiesOf } from '@storybook/react'
import { defaultRender } from './Link.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Header/Link', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

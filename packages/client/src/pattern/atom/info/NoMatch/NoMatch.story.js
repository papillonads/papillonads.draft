import { storiesOf } from '@storybook/react'
import { defaultRender } from './NoMatch.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Info/NoMatch', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

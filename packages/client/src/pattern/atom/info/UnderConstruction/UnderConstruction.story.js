import { storiesOf } from '@storybook/react'
import { defaultRender } from './UnderConstruction.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Info/UnderConstruction', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

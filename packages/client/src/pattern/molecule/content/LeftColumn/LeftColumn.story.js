import { storiesOf } from '@storybook/react'
import { defaultRender } from './LeftColumn.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Content/LeftColumn', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

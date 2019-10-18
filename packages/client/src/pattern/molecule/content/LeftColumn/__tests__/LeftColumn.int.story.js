import { storiesOf } from '@storybook/react'
import { defaultRender } from './LeftColumn.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Content/LeftColumn', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

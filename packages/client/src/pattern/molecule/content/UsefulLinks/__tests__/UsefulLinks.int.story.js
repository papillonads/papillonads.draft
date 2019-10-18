import { storiesOf } from '@storybook/react'
import { defaultRender } from './UsefulLinks.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Content/UsefulLinks', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

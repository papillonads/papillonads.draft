import { storiesOf } from '@storybook/react'
import { defaultRender } from './UsefulLinks.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Content/UsefulLinks', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

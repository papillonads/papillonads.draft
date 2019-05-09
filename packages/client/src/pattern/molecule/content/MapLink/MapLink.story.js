import { storiesOf } from '@storybook/react'
import { defaultRender } from './MapLink.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Content/MapLink', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

import { storiesOf } from '@storybook/react'
import { defaultRender } from './Navigation.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Content/Navigation', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

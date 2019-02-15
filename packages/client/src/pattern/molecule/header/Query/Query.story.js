import { storiesOf } from '@storybook/react'
import { defaultRender } from './Query.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/Query', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

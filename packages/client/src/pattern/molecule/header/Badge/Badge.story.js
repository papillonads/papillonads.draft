import { storiesOf } from '@storybook/react'
import { defaultRender } from './Badge.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/Badge', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

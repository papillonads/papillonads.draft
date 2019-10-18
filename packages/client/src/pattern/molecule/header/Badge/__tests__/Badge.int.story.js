import { storiesOf } from '@storybook/react'
import { defaultRender } from './Badge.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/Badge', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

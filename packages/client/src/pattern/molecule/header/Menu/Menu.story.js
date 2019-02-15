import { storiesOf } from '@storybook/react'
import { defaultRender } from './Menu.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/Menu', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

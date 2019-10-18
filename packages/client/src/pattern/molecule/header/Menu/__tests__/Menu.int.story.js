import { storiesOf } from '@storybook/react'
import { defaultRender } from './Menu.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/Menu', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

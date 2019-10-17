import { storiesOf } from '@storybook/react'
import { defaultRender } from './NavigationBar.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/NavigationBar', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

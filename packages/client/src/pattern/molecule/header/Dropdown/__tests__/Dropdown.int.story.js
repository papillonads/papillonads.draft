import { storiesOf } from '@storybook/react'
import { defaultRender } from './Dropdown.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/Dropdown', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

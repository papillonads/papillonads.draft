import { storiesOf } from '@storybook/react'
import { defaultRender } from './Dropdown.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/Dropdown', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

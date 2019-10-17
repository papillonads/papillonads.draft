import { storiesOf } from '@storybook/react'
import { defaultRender } from './SearchBar.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/SearchBar', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

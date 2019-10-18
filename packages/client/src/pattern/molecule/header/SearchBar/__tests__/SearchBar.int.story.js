import { storiesOf } from '@storybook/react'
import { defaultRender } from './SearchBar.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/SearchBar', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

import { storiesOf } from '@storybook/react'
import { defaultRender } from './SearchBar.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/SearchBar', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

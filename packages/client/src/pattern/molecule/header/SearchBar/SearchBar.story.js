import { storiesOf } from '@storybook/react'
import { searchBarDefault } from './SearchBar.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const searchBarDefaultInfo = getInfo('default')

storiesOf('Patttern/Molecule/Bar/SearchBar', module).add(searchBarDefaultInfo.text, () => searchBarDefault, searchBarDefaultInfo.parameters)

import { storiesOf } from '@storybook/react'
import { headerDefault } from './Header.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const headerDefaultInfo = getInfo('default')

storiesOf('Patttern/Organism/Section/Header', module).add(headerDefaultInfo.text, () => headerDefault, headerDefaultInfo.parameters)

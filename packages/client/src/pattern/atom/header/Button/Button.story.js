import { storiesOf } from '@storybook/react'
import { buttonDefault } from './Button.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const buttonDefaultInfo = getInfo('default')

storiesOf('Patttern/Organism/Section/Button', module).add(buttonDefaultInfo.text, () => buttonDefault, buttonDefaultInfo.parameters)

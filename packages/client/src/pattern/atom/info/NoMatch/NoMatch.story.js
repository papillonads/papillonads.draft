import { storiesOf } from '@storybook/react'
import { noMatchDefault } from './NoMatch.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const noMatchDefaultInfo = getInfo('default')

storiesOf('Patttern/Atom/Info/NoMatch', module).add(noMatchDefaultInfo.text, () => noMatchDefault, noMatchDefaultInfo.parameters)

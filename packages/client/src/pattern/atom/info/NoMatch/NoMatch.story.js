import { storiesOf } from '@storybook/react'
import { noMatchDefault } from './NoMatch.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const noMatchDefaultInfo = getInfo('NoMatch Default')

storiesOf('Atom/NoMatch', module).add(noMatchDefaultInfo.text, () => noMatchDefault, noMatchDefaultInfo.parameters)

import { storiesOf } from '@storybook/react'
import { startPageDefault } from './StartPage.render'
import { getInfo } from '../../../../../../.storybook/utility'

const startPageDefaultInfo = getInfo('StartPage default')

storiesOf('Patttern/Page/StartPage', module).add(startPageDefaultInfo.text, () => startPageDefault, startPageDefaultInfo.parameters)

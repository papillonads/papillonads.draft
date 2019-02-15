import { storiesOf } from '@storybook/react'
import { startTemplateDefault } from './StartTemplate.render'
import { getInfo } from '../../../../../../.storybook/utility'

const startTemplateDefaultInfo = getInfo('default')

storiesOf('Patttern/Template/StartTemplate', module).add(
  startTemplateDefaultInfo.text,
  () => startTemplateDefault,
  startTemplateDefaultInfo.parameters,
)

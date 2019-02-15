import { storiesOf } from '@storybook/react'
import { notFoundTemplateDefault } from './NotFoundTemplate.render'
import { getInfo } from '../../../../../../.storybook/utility'

const notFoundTemplateDefaultInfo = getInfo('default')

storiesOf('Patttern/Template/NotFoundTemplate', module).add(
  notFoundTemplateDefaultInfo.text,
  () => notFoundTemplateDefault,
  notFoundTemplateDefaultInfo.parameters,
)

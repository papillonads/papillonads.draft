import { storiesOf } from '@storybook/react'
import { defaultRender } from './SearchFormOptions.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/SearchFormOptions', module).add(
  defaultRenderInfo.text,
  () => defaultRender,
  defaultRenderInfo.parameters,
)
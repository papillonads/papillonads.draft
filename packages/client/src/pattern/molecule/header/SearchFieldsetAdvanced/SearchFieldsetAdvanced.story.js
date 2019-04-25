import { storiesOf } from '@storybook/react'
import { defaultRender } from './SearchFieldsetAdvanced.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/SearchFieldsetAdvanced', module).add(
  defaultRenderInfo.text,
  () => defaultRender,
  defaultRenderInfo.parameters,
)

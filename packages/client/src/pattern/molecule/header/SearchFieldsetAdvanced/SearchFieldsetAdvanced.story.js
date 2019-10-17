import { storiesOf } from '@storybook/react'
import { defaultRender } from './SearchFieldsetAdvanced.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/SearchFieldsetAdvanced', module).add(
  defaultRenderInfo.text,
  () => defaultRender,
  defaultRenderInfo.parameters,
)

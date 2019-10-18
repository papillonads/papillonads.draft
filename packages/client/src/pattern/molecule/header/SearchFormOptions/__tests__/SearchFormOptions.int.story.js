import { storiesOf } from '@storybook/react'
import { defaultRender } from './SearchFormOptions.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/SearchFormOptions', module).add(
  defaultRenderInfo.text,
  () => defaultRender,
  defaultRenderInfo.parameters,
)

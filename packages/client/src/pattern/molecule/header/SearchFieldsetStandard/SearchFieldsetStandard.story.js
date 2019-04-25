import { storiesOf } from '@storybook/react'
import { defaultRender } from './SearchFieldsetStandard.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/SearchFieldsetStandard', module).add(
  defaultRenderInfo.text,
  () => defaultRender,
  defaultRenderInfo.parameters,
)

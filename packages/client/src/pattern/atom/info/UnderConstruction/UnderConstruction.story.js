import { storiesOf } from '@storybook/react'
import { underConstructionDefault } from './UnderConstruction.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const underConstructionDefaultInfo = getInfo('default')

storiesOf('Patttern/Atom/Info/UnderConstruction', module).add(
  underConstructionDefaultInfo.text,
  () => underConstructionDefault,
  underConstructionDefaultInfo.parameters,
)

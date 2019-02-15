import { storiesOf } from '@storybook/react'
import { navigationBarDefault } from './NavigationBar.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const navigationBarDefaultInfo = getInfo('default')

storiesOf('Patttern/Molecule/Bar/NavigationBar', module).add(
  navigationBarDefaultInfo.text,
  () => navigationBarDefault,
  navigationBarDefaultInfo.parameters,
)

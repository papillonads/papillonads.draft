import { storiesOf } from '@storybook/react'
import { defaultRender } from './MenuItem.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/MenuItem', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

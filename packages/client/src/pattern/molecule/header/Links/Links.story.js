import { storiesOf } from '@storybook/react'
import { defaultRender } from './Links.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Header/Links', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

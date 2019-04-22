import { storiesOf } from '@storybook/react'
import { defaultRender } from './Header.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Organism/Section/Header', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
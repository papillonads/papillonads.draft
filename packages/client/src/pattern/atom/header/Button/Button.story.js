import { storiesOf } from '@storybook/react'
import { defaultRender } from './Button.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Organism/Section/Button', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

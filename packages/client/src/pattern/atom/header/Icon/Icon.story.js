import { storiesOf } from '@storybook/react'
import { defaultRender } from './Icon.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Organism/Section/Icon', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

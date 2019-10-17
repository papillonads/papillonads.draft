import { storiesOf } from '@storybook/react'
import { defaultRender } from './Content.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Organism/Section/Content', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

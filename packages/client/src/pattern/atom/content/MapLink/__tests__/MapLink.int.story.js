import { storiesOf } from '@storybook/react'
import { defaultRender } from './MapLink.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Content/MapLink', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)

import { storiesOf } from '@storybook/react'
import { logoRender } from './SvgIconGroup.render'
import { getInfo } from '../../../../../../../../.storybook/utility'

const logoRenderInfo = getInfo('logoRender')

storiesOf('Patttern/Atom/Header/Icon/SvgIconGroup', module).add(logoRenderInfo.text, () => logoRender, logoRenderInfo.parameters)

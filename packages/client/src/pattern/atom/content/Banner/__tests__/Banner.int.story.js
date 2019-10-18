import { storiesOf } from '@storybook/react'
import { topBannerRender, marketingBannerRender } from './Banner.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const topBannerRenderInfo = getInfo('topBanner')
const marketingBannerRenderInfo = getInfo('marketingBanner')

storiesOf('Patttern/Atom/Content/Banner/TopBanner', module).add(
  topBannerRenderInfo.text,
  () => topBannerRender,
  topBannerRenderInfo.parameters,
)
storiesOf('Patttern/Atom/Content/Banner/MarketingBanner', module).add(
  marketingBannerRenderInfo.text,
  () => marketingBannerRender,
  marketingBannerRenderInfo.parameters,
)

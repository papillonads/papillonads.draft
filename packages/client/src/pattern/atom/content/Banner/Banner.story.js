import { storiesOf } from '@storybook/react'
import { topBannerRender, marketingBannerRender } from './Banner.render'
import { getInfo } from '../../../../../../../.storybook/utility'

const topBannerRenderInfo = getInfo('topBanner')
const marketingBannerRenderInfo = getInfo('marketingBanner')

storiesOf('Patttern/Organism/Section/Content/TopBanner', module).add(
  topBannerRenderInfo.text,
  () => topBannerRender,
  topBannerRenderInfo.parameters,
)
storiesOf('Patttern/Organism/Section/Content/MarketingBanner', module).add(
  marketingBannerRenderInfo.text,
  () => marketingBannerRender,
  marketingBannerRenderInfo.parameters,
)

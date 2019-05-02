import { topBannerRender, marketingBannerRender } from './Banner.render'

describe('<Banner />', () => {
  describe('Snaphot', () => {
    test('must match topBannerRender', () => {
      expect(global.renderToJSON(topBannerRender)).toMatchSnapshot()
    })

    test('must match marketingBannerRender', () => {
      expect(global.renderToJSON(marketingBannerRender)).toMatchSnapshot()
    })
  })
})

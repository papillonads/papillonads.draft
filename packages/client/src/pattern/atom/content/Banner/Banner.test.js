import { topBannerRender, marketingBannerRender } from './Header.render'

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
